export = Interaction;
/**
 * Represents a Discord interaction
 */
declare class Interaction {
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
    constructor(server: any, interactionInfo: {
        /**
         * - Id of the interaction
         */
        id: string;
        /**
         * - The type of the interaction
         */
        type: number;
        /**
         * - The command data payload
         */
        data: any | null;
        /**
         * - The guild it was sent from
         */
        guild_id: string;
        /**
         * - The channel it was sent from
         */
        channel_id: string;
        /**
         * - Guild member data for the invoking user
         */
        member: any;
        /**
         * - A continuation token for responding to the interaction
         */
        token: string;
        /**
         * - Read-only property, always 1
         */
        version: number;
    }, res: any);
    /**
     * The interaction
     * @type {InteractionInfo}
     */
    interaction: {
        /**
         * - Id of the interaction
         */
        id: string;
        /**
         * - The type of the interaction
         */
        type: number;
        /**
         * - The command data payload
         */
        data: any | null;
        /**
         * - The guild it was sent from
         */
        guild_id: string;
        /**
         * - The channel it was sent from
         */
        channel_id: string;
        /**
         * - Guild member data for the invoking user
         */
        member: any;
        /**
         * - A continuation token for responding to the interaction
         */
        token: string;
        /**
         * - Read-only property, always 1
         */
        version: number;
    };
    /**
     * Express Response
     * @private
     * @type {*}
     */
    private _res;
    /**
     * The server this interaction belongs to
     */
    server: any;
    /**
     * Responds to a interaction
     * @param {Object} data
     */
    respond(data: any): any;
    /**
     * Edits the original or a follow up message
     * @param {Object} data
     * @param {?string} id - The id of the followup message to edit, if omitted will edit original message
     */
    edit(data: any, id: string | null): any;
    /**
     * Create a followup message
     * @param {Object} data
     */
    followup(data: any): any;
    /**
     * Deletes the original or a follow up message
     * @param {string} id
     */
    delete(id: string): any;
}
