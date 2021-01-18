export = SlashCommand;
/**
 * Represents a Discord Slash Command
 */
declare class SlashCommand {
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
    constructor(server: any, guild: string | null, info: {
        /**
         * - The name of the command
         */
        name: string;
        /**
         * - The description of the command
         */
        description: string;
        /**
         * - The options of the command
         */
        options?: any[];
        /**
         * - The id of the command
         */
        id?: string;
        /**
         * - The id of the application that this command belongs to
         */
        application_id?: string;
    });
    /**
     * Updates the properties to correspond to the info
     * @private
     * @param {DiscordInteractionsServer} server
     * @param {?string} guild
     * @param {CommandInfo} info
     */
    private _setProperties;
    /**
     * The id of this command
     * @type {?string}
     */
    id: string | null;
    /**
     * Server that this command is for
     * @type {server}
     */
    server: any;
    /**
     * The name of the command
     * @type {string}
     */
    name: string;
    /**
     * The description of the command
     * @type {string}
     */
    description: string;
    /**
     * The options of the command
     * @type {CommandOption[]}
     */
    options: any[];
    /**
     * Remote version of the command
     * @private
     * @type {?CommandInfo}
     */
    private _remote;
    /**
     * The id of the guild this command belongs to
     * @type {?string}
     */
    guild: string | null;
    /**
     * Update changes
     * @returns {Promise<boolean>} - Returns true if the command has been updated,
     *  and false if there are no changes
     */
    update(): Promise<boolean>;
    /**
     * The CommandManager this command belongs to
     * @type {CommandsManager}
     */
    get manager(): any;
    /**
     * Returns Command Info
     * @returns {CommandInfo}
     */
    toInfo(): {
        /**
         * - The name of the command
         */
        name: string;
        /**
         * - The description of the command
         */
        description: string;
        /**
         * - The options of the command
         */
        options?: any[];
        /**
         * - The id of the command
         */
        id?: string;
        /**
         * - The id of the application that this command belongs to
         */
        application_id?: string;
    };
    /**
     * Returns JSON
     */
    toJSON(): string;
    /**
     * Execute the command
     * @param {Interaction} interaction
     * @param {Object} options
     */
    execute(): void;
}
