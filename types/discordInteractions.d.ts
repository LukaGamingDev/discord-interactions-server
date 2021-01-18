export = proto;
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
 * @alias discordInteractionsServer
 * @param {ClientOptions} options
 * @returns {DiscordInteractionsServer} - Express Middleware
 */
declare function proto(options: ClientOptions): DiscordInteractionsServer;
declare namespace proto {
    export { handle, checkIsVerified, handleInteraction, getCommandFromId, ClientOptions, DiscordInteractionsServer };
}
/**
 * ClientOptions
 */
type ClientOptions = {
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
type DiscordInteractionsServer = {
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
declare function handle(req: any, res: any): Promise<void>;
declare function checkIsVerified(signature: any, timestamp: any, body: any): boolean;
declare function handleInteraction(req: any, res: any): Promise<void>;
declare function getCommandFromId(body: any): any;
import CommandsManager = require("./CommmandsManager");
import axios = require("axios");
