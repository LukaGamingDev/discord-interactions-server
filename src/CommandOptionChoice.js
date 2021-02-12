/**
 * Represents a CommandOptionChoice
 */
class CommandOptionChoice {
    /**
     * @typedef {Object} CommandOptionChoiceInfo
     * @property {string} name - The name of the CommandOptionChoice
     * @property {string|number} value - The value of the CommandOptionChoice
     */

    /**
     * @param {CommandOption} option 
     * @param {CommandOptionChoiceInfo} data 
     */
    constructor(option, data) {
        /**
         * The type of the CommandOption
         * @type {CommandOption}
         */
        this.option = option

        /**
         * The type of the CommandOption
         * @type {string}
         */
        this.name = data.name

        /**
         * The type of the CommandOption
         * @type {string|number}
         */
        this.value = data.value
    }
}