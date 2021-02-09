const SlashCommand = require('./SlashCommand')

/**
 * Manages global/guild commands
 */
class CommandsManager {
    /**
     * @param {Server} server - The Server this manager belongs to
     * @param {string} [guild] - The id of the guild this manager belongs to
     */
    constructor(server, guild) {
        /**
         * The Server this manager belongs to
         * @type {Server}
         */
        this.server = server

        /**
         * The id of the guild this manager belongs to
         * @type {?string}
         */
        this.guild = guild ?? null

        /**
         * The commands cache
         * @type {Map<string,SlashCommand>}
         */
        this.cache = new Map()
    }

    /**
     * Fetch all commands and update the cache
     * @returns {Promise<SlashCommand[]>}
     */
    fetch() {
        Promise.resolve([new SlashCommand()])
    }
}

module.exports = CommandsManager