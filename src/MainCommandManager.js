const CommandManager = require('./CommandManager')

/**
 * Manages Command Managers
 */
class MainCommandManager {
    constructor() {
        /**
         * Global command manager
         * @type {CommandManager}
         */
        this.global = new CommandManager()

        /**
         * Map of command managers that belongs to a guild.
         * @type {Map<string,CommandManager>}
         */
        this.guilds = new Map()
    }

    /**
     * Gets a guild command manager, if the guild does not exist in {@link MainCommandManager~guilds}
     * creates it.
     * @param {string} id
     * @returns {CommandManager}
     */
    guild(id) {
        if (this.guilds.has(id)) {
            return this.guilds.get(id)
        }

        return this.guilds.set(new CommandManager())
    }
}

module.exports = MainCommandManager
