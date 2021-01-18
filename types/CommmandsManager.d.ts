export = CommandsManager;
/**
 * Manages commands stores
 */
declare class CommandsManager {
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
import CommandsStore = require("./CommandsStore");
import { default as Collection } from "@discordjs/collection";
