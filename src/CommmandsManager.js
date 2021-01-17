const { default: Collection } = require("@discordjs/collection")
const CommandsStore = require("./CommandsStore")

/**
 * Manages commands stores
 */
class CommandsManager {
    /**
     * @param {DiscordInteractionsServer} server
     */
    constructor(server) {
        /**
         * The server this manager belongs to
         * @type {string}
         */
        this.server = server

        /**
         * Global Commands
         * @type {CommandsStore}
         */
        this.global = new CommandsStore(server)

        /**
         * Cached guilds
         * @type {Collection<string,CommandsStore>}
         */
        this.guilds = new Collection()
    }

    /**
     * Gets or creates a guild {@link CommandsStore}
     * @param {string} id The ID of the guild
     * @returns {CommandsStore}
     */
    guild(id) {
        if (this.guilds.has(id)) {
            return this.guilds.get(id)
        }

        const guild = new CommandsStore(this.server, id)
        this.guilds.set(id, guild)
        return guild
    }
}

module.exports = CommandsManager