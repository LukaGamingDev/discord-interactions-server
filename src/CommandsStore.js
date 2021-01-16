/**
 * Stores and manages commands
 */
class CommandsStore {
    /**
     * @param {DiscordInteractionsServer} server
     * @param {string} [guild]
     */
    constructor(server, guild) {
        this.server = server
        this.guild = guild
        this.cache = new Map()
    }

    /**
     * Creates a new Slash command
     * @param {SlashCommand} command - Command to create
     * @returns {Promise<SlashCommand>}
     */
    create(command) {
        const endpoint = this.guild
            ? `/applications/${this.server.applicationId}/guilds/${this.guild}/commands`
            : `/applications/${this.server.applicationId}/commands`

        this.server.api.post(endpoint)
    }
}

module.exports = CommandsStore