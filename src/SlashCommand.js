const invalidTypeError = require('./utils/invalidTypeError')
const { diff } = require('deep-object-diff')

/**
 * Represents a Discord Slash Command
 */
class SlashCommand {
    /**
     * @typedef {Object} CommandOptionChoice
     * @property {string} name - 1-100 character choice name
     * @property {string|number} value - value of the choice
     */

    /**
     * @typedef {Object} CommandOptionInfo
     * @property {number} type - The type of the option
     * @property {string} name - The name of the option
     * @property {string} description - The description of the option
     * @property {boolean} [default] - The first `required` option for the user to complete.
     *  Only one option can be `default`
     * @property {boolean} [required=false] - if the parameter is required or optional
     * @property {CommandOptionChoice[]} [choices] - choices for `string` and `int` types for the user
     *  to pick from
     * @property {CommandOptionResolvable[]} [options] - if the option is a subcommand or subcommand 
     *  group type, this nested options will be the parameters
     */

    /**
     * @typedef {Object} CommandInfo
     * @property {string} name - The name of the command
     * @property {string} description - The description of the command
     * @property {CommandOption[]} [options] - The options of the command
     * @property {string} [id] - The id of the command
     * @property {string} [application_id] - The id of the application that this command belongs to
     */

    /**
     * @param {DiscordInteractionsServer} server
     * @param {?string} guild
     * @param {CommandInfo} info 
     */
    constructor(server, guild, info) {
        if (typeof info.name !== 'string') throw invalidTypeError('name', 'string')
        if (typeof info.description !== 'string') throw invalidTypeError('description', 'string')

        this._setProperties(server, guild, info)
    }

    /**
     * Updates the properties to correspond to the info
     * @private
     * @param {DiscordInteractionsServer} server
     * @param {?string} guild
     * @param {CommandInfo} info
     */
    _setProperties(server, guild, info) {
        /**
         * The id of this command
         * @type {?string}
         */
        this.id = info.id || null

        /**
         * Server that this command is for
         * @type {server}
         */
        this.server = server

        /**
         * The name of the command
         * @type {string}
         */
        this.name = info.name

        /**
         * The description of the command
         * @type {string}
         */
        this.description = info.description

        /**
         * The options of the command
         * @type {CommandOption[]}
         */
        this.options = Array.from(info.options || [])

        /**
         * Remote version of the command
         * @private
         * @type {?CommandInfo}
         */
        this._remote = null

        /**
         * The id of the guild this command belongs to
         * @type {?string}
         */
        this.guild = guild || null
    }

    /**
     * Update changes
     * @returns {Promise<boolean>} - Returns true if the command has been updated,
     *  and false if there are no changes
     */
    update() {
        const diffs = diff(this._remote, this.toInfo())
        diffs.options = Object.values(diffs.options || [])
        if (Object.entries(diffs).length === 0) return Promise.resolve(false)
        return this.manager.apiPatch(this.id, diffs)
            .then(() => true)
    }

    /**
     * The CommandManager this command belongs to
     * @type {CommandsManager}
     */
    get manager() {
        return this.guild 
            ? this.server.commands.guild(this.guild)
            : this.server.commands.global
    }

    /**
     * Returns Command Info
     * @returns {CommandInfo}
     */
    toInfo() {
        return {
            name: this.name,
            description: this.description,
            options: this.options
        }
    }

    /**
     * Returns JSON
     */
    toJSON() {
        return JSON.stringify(this.toInfo())
    }

    /**
     * Execute the command
     * @param {Interaction} interaction
     * @param {Object} options
     */
    execute() {
        throw new Error(`Command '${this.name}' does not have 'execute' method`)
    }
}

module.exports = SlashCommand