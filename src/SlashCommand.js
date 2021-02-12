/**
 * Represents a SlashCommand
 */
class SlashCommand {
    /**
     * @typedef {Object} CommandInfo
     * @property {string} id - The id of the command
     * @property {string} application_id - The id of the parent application
     * @property {string} name - The name of the command
     * @property {string} description - The description of the command
     * @property {CommandOptionInfo[]} [options] - The parameters of the command
     */

    /**
     * @param {CommandManager} manager - The manager this command belongs to
     * @param {CommandInfo} data - The data of the SlashCommand
     */
    constructor(manager, data) {
        /**
         * @private
         * @type {CommandInfo}
         */
        this.remote = data

        /**
         * The manager this command belongs to
         * @type {CommandManager}
         */
        this.manager = manager

        /**
         * The id of the command
         * @type {string}
         */
        this.id = data.id

        /**
         * The name of the command
         * @type {string}
         */
        this.name = data.name

        /**
         * The description of the command
         * @type {string}
         */
        this.description = data.description

        /**
         * The options of the command
         * @type {CommandOption[]}
         */
        this.options = data.options.map(optionInfo => (
            new CommandOption(this, optionInfo)
        )) ?? null
    }

    update() {

    }
}