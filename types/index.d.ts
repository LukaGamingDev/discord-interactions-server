export const Server: {
    (options: import("./discordInteractions").ClientOptions): import("./discordInteractions").DiscordInteractionsServer;
    handle(req: any, res: any): Promise<void>;
    checkIsVerified(signature: any, timestamp: any, body: any): boolean;
    handleInteraction(req: any, res: any): Promise<void>;
    getCommandFromId(body: any): any;
};
export const SlashCommand: typeof import("./SlashCommand");
export const CommandsStore: typeof import("./CommandsStore");
export const CommandsManager: typeof import("./CommmandsManager");
