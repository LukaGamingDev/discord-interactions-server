const express = require('express')
const nacl = require('tweetnacl')
const { readdirSync } = require('fs')
const axios = require('axios')

const CommandsManager = require('./CommmandsManager')

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
    //interactions.commands = new CommandsManager()
    interactions.api = axios.create({
        baseURL: 'https://discord.com/api/v8',
        headers: {
            'Authorization': options.authorization
        }
    })

    return interactions
}

proto.handle = function handle(req, res) {
    const signature = req.get('X-Signature-Ed25519')
    const timestamp = req.get('X-Signature-Timestamp')
    const body = JSON.stringify(req.body)

    if (this.checkIsVerified(signature, timestamp, body)) {
        this.handleInteraction(req, res)
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

    console.log(isVerified)

    return isVerified
}

proto.handleInteraction = function handleInteraction(req, res) {
    switch (req.body.type) {
        case 1:
            res.json({
                type: 1
            })
            break
        case 2:
            res.json({
                type: 4,
                data: {
                    content: 'Thanks for firing **A** command,' +
                             'The only thing I know is that the command is named ' +
                             req.body.data.name
                }
            })
            break
        default:
            console.error(`[INTERACTIONS]: Received unkown request type ${req.body.type}`)
            break
    }
}

exports = module.exports = proto