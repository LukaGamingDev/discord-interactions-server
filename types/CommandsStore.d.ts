export = CommandsStore;
/**
 * Stores and manages commands
 */
declare class CommandsStore {
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
     * Adds multiple commands
     * @see {@link CommandsStore#addCommand}
     * @param {Function[]|SlashCommand[]} commands - An array of SlashCommand Constructors or instances to
     *  add
     */
    addCommands(commands: Function[] | SlashCommand[]): CommandsStore;
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
import SlashCommand = require("./SlashCommand");
import { default as Collection } from "@discordjs/collection";
