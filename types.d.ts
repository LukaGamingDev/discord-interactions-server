declare module "CommandInteraction" {
    export = Interaction;
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
}
declare module "utils/invalidTypeError" {
    function _exports(name: any, expected: any): TypeError;
    export = _exports;
}
declare module "SlashCommand" {
    export = SlashCommand;
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
         * @param {string} [guild]
         * @param {CommandInfo} info
         */
        constructor(server: any, guild?: string, info: {
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
         * @param {string} [guild]
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
}
declare module "CommandsStore" {
    export = CommandsStore;
    /**
     * Stores and manages commands
     */
    class CommandsStore {
        /**
         * @param {DiscordInteractionsServer} server
         * @param {string} [guild]
         */
        constructor(server: any, guild?: string);
        /**
         * The server this store belongs to
         * @type {DiscordInteractionsServer}
         */
        server: any;
        /**
         * The id of the guild that this store belongs to, if there is any
         * @type {?string}
         */
        guild: string | null;
        /**
         * The commands queue, use {@link CommandsStore#addCommand} to add a command to this queue
         * @type {SlashCommand[]}
         */
        queue: SlashCommand[];
        /**
         * The commands cache
         * @type {Collection<string,SlashCommand>}
         */
        cache: Collection<string, SlashCommand>;
        /**
         * Adds a command.
         * The command will be put into {@link CommandsStore#queue|the queue}
         * Use {@link CommandsStore#update} to update the remote commands
         * @param {Function|SlashCommand} command - SlashCommand Constructor or instance to add
         */
        addCommand(command: Function | SlashCommand): CommandsStore;
        /**
         * Update the remote commands.
         * Will update remote commands, will also clear {@link CommandsStore#queue|the queue}
         * @returns {Promise}
         */
        update(): Promise<any>;
        /**
         * Fetch the commands, and caches them
         * @returns {Promise<SlashCommand[]>}
         */
        fetch(): Promise<SlashCommand[]>;
        /**
         * GET Discord Commands Endpoint
         * @private
         * @returns {Promise}
         */
        private apiGet;
        /**
         * POST Discord Commands Endpoint
         * @private
         * @param {SlashCommand} command - Command to POST
         * @returns {Promise}
         */
        private apiPost;
        /**
         * PATCH Discord Commands Endpoint
         * @private
         * @param {SlashCommand} command - Command to PATCH
         * @param {SlashCommandInfo} changes - The changes to the command
         * @returns {Promise}
         */
        private apiPatch;
        /**
         * DELETE Discord Commands Endpoint
         * @private
         * @param {SlashCommand} command - Command to DELETE
         * @returns {Promise}
         */
        private apiDelete;
    }
    import SlashCommand = require("SlashCommand");
    import { default as Collection } from "@discordjs/collection";
}
declare module "CommmandsManager" {
    export = CommandsManager;
    /**
     * Manages commands stores
     */
    class CommandsManager {
        /**
         * @param {DiscordInteractionsServer} server
         */
        constructor(server: any);
        /**
         * The server this manager belongs to
         * @type {string}
         */
        server: string;
        /**
         * Global Commands
         * @type {CommandsStore}
         */
        global: CommandsStore;
        /**
         * Cached guilds
         * @type {Collection<string,CommandsStore>}
         */
        guilds: Collection<string, CommandsStore>;
        /**
         * Gets or creates a guild {@link CommandsStore}
         * @param {string} id The ID of the guild
         * @returns {CommandsStore}
         */
        guild(id: string): CommandsStore;
    }
    import CommandsStore = require("CommandsStore");
    import { default as Collection } from "@discordjs/collection";
}
declare module "discordInteractions" {
    /**
     * ClientOptions
     */
    export type ClientOptions = {
        /**
         * - The public key of your application
         */
        publicKey: string;
        /**
         * - Your application's ID
         */
        applicationId: string;
        /**
         * - Authorization Header
         */
        authorization: string;
    };
    export type DiscordInteractionsServer = {
        /**
         * - The public key of your application
         */
        publicKey: string;
        /**
         * - Your application's ID
         */
        applicationId: string;
        /**
         * - Slash Commands
         */
        commands: CommandsManager;
        /**
         * - Axios instance
         */
        api: typeof axios;
    };
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
     * @alias DiscordInteractionsServer
     * @param {ClientOptions} options
     * @returns {DiscordInteractionsServer} - Express Middleware
     */
    function proto(options: ClientOptions): DiscordInteractionsServer;
    namespace proto {
        function handle(req: any, res: any): Promise<void>;
        function checkIsVerified(signature: any, timestamp: any, body: any): boolean;
        function handleInteraction(req: any, res: any): Promise<void>;
        function getCommandFromId(body: any): any;
    }
    import CommandsManager_2 = require("CommmandsManager");
    import axios = require("axios");
    export const SlashCommand: typeof import("SlashCommand");
    export const CommandsStore: typeof import("CommandsStore");
    export const CommandsManager: typeof import("CommmandsManager");
    export { proto as Server };
}
