const express = require('express')
const nacl = require('tweetnacl')
const { readdirSync } = require('fs')
const axios = require('axios')

const CommandsManager = require('./CommmandsManager')
const Interaction = require('./CommandInteraction')

/**
 * ClientOptions
 * @typedef {Object} ClientOptions
 * @property {string} publicKey - The public key of your application
 * @property {string} applicationId - Your application's ID
 * @property {string} authorization - Authorization Header
 */

/**
 * @typedef {Object} DiscordInteractionsServer
 * @property {string} publicKey - The public key of your application
 * @property {string} applicationId - Your application's ID
 * @property {CommandsManager} commands - Slash Commands
 * @property {axios} api - Axios instance
 */

/**
 * Handles Discord Interactions
 * @alias discordInteractionsServer
 * @param {ClientOptions} options
 * @returns {DiscordInteractionsServer} - Express Middleware
 */
const proto = function discordInteractionsServer(options) {
    async function interactions(req, res, next) {
        express.json()(req, res, error => {
            if (error) {
                next(error)
            } else {
                interactions.handle(req, res)
            }
        })
    }

    Object.setPrototypeOf(interactions, proto)

    interactions.publicKey = options.publicKey
    interactions.applicationId = options.applicationId
    interactions.commands = new CommandsManager(interactions)
    interactions.api = axios.create({
        baseURL: 'https://discord.com/api/v8',
        headers: {
            'Authorization': options.authorization
        }
    })

    return interactions
}

proto.handle = async function handle(req, res) {
    const signature = req.get('X-Signature-Ed25519')
    const timestamp = req.get('X-Signature-Timestamp')
    const body = JSON.stringify(req.body)

    if (this.checkIsVerified(signature, timestamp, body)) {
        await this.handleInteraction(req, res)
    } else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}

proto.checkIsVerified = function checkIsVerified(signature, timestamp, body) {
    const isVerified = nacl.sign.detached.verify(
        Buffer.from(timestamp + body),
        Buffer.from(signature, 'hex'),
        Buffer.from(this.publicKey, 'hex')
    )

    return isVerified
}

proto.handleInteraction = async function handleInteraction(req, res) {
    switch (req.body.type) {
        case 1:
            res.json({
                type: 1
            })
            break
        case 2:
            const command = this.getCommandFromId(req.body)

            if (!command) return console.warn(
                `[INTERACTIONS]: Received unkown command '${req.body.data.name}' (${req.body.data.id})`
            )

            try {    
                const interaction = new Interaction(this, req.body, res)
                const options = (req.body.data.options || []).reduce(
                    (prev, v) => {
                        prev[v.name] = v.value
                        return prev
                    }, {}
                )

                await command.execute(interaction, options)
            } catch(e) {
                console.error('[INTERACTIONS]: An error has occured while running command')
                console.error('[INTERACTIONS]:', e)
                res.json({
                    type: 4,
                    data: {
                        embeds: [
                            {
                                title: 'Error',
                                description: 'An error has occurred while running command ' +
                                    `\`${command.name}\``,
                                fields: [
                                    {
                                        name: 'Message',
                                        value: `\`\`\`\n${e.message}\n\`\`\``
                                    }
                                ],
                                color: 0xff0000
                            }
                        ]
                    }
                })
            }

            break
        default:
            console.error(`[INTERACTIONS]: Received unkown request type ${req.body.type}`)
            break
    }
}

proto.getCommandFromId = function(body) {
    const globalCommand = this.commands.global.cache.get(body.data.id)
    if (globalCommand) return globalCommand
    const guild = this.commands.guild(body.guild_id)
    if (guild) {
        const guildCommand = guild.cache.get(body.data.id)
        return guildCommand
    }
}

module.exports = proto