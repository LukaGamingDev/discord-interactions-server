/**
 * Represents a CommandOption
 */
class CommandOption {
    /**
     * @typedef {Object} CommandOptionInfo
     * @property {CommandOptionType} type - The type of the CommandOption
     * @property {string} name - The name of the CommandOption
     * @property {string} description - The description of the CommandOption
     * @property {boolean} [required=false] - Whether or not the CommandOption is optional or required
     * @property {CommandOptionChoice[]} [choices] - Choices for the user to pick from
     * @property {CommandOption[]} [options] - The subcommands of the CommandOption, if the option is
     *                                         a subcommand or subcommand group
     */

    /**
     * 
     * @param {SlashCommand} command 
     * @param {CommandOptionInfo} data 
     */
    constructor(command, data) {
        /**
         * The command this CommandOption belongs to
         * @type {SlashCommand}
         */
        this.command = command

        /**
         * The type of the CommandOption
         * @type {CommandOptionType}
         */
        this.type = data.type

        /**
         * The type of the CommandOption
         * @type {string}
         */
        this.name = data.name

        /**
         * The type of the CommandOption
         * @type {string}
         */
        this.description = data.description

        /**
         * The type of the CommandOption
         * @type {?boolean}
         */
        this.required = data.required

        /**
         * The type of the CommandOption
         * @type {CommandOptionChoice[]}
         */
        this.choices = data.choices.map(choiceInfo => (
            new CommandOptionChoice(choiceInfo)
        )) ?? null

        /**
         * The type of the CommandOption
         * @type {CommandOption[]}
         */
        this.options = data.options
    }
}