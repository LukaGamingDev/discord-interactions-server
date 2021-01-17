/**
 * Represents a Discord interaction
 */
class Interaction {
    /**
     * @typedef {Object} InteractionInfo
     * @property {string} id - Id of the interaction
     * @property {number} type - The type of the interaction
     * @property {?Object} data - The command data payload
     * @property {string} guild_id - The guild it was sent from
     * @property {string} channel_id - The channel it was sent from
     * @property {Object} member - Guild member data for the invoking user
     * @property {string} token - A continuation token for responding to the interaction
     * @property {number} version - Read-only property, always 1
     */

    /**
     * @param {DiscordInteractionsServer} server
     * @param {InteractionInfo} interactionInfo
     * @param {*} res
     */
    constructor(server, interactionInfo, res) {
        /**
         * The interaction
         * @type {InteractionInfo}
         */
        this.interaction = interactionInfo

        /**
         * Express Response
         * @private
         * @type {*}
         */
        this._res = res

        /**
         * The server this interaction belongs to
         */
        this.server = server
    }

    /**
     * Responds to a interaction
     * @param {Object} data
     */
    respond(data) {
        return this._res.json({
            type: 4,
            data
        })
    }

    /**
     * Edits the original or a follow up message
     * @param {Object} data
     * @param {?string} id - The id of the followup message to edit, if omitted will edit original message
     */
    edit(data, id) {
        const endpoint = id 
            ? `/webhooks/${this.server.applicationId}/${this.interaction.token}/messages/${id}`
            : `/webhooks/${this.server.applicationId}/${this.interaction.token}/messages/@original`

        return this.server.api.patch(endpoint, data)
            .then(res => res.data)
    }

    /**
     * Create a followup message
     * @param {Object} data
     */
    followup(data) {
        const endpoint = `/webhooks/${this.server.applicationId}/${this.interaction.token}`

        return this.server.api.post(endpoint, data)
            .then(res => res.data)
    }

    /**
     * Deletes the original or a follow up message
     * @param {string} id 
     */
    delete(id) {
        const endpoint = id 
            ? `/webhooks/${this.server.applicationId}/${this.interaction.token}/messages/${id}`
            : `/webhooks/${this.server.applicationId}/${this.interaction.token}/messages/@original`

        return this.server.api.delete(endpoint)
            .then(res => res.data)
    }
}

module.exports = Interaction