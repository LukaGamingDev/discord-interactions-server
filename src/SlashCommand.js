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
     * @typedef {Object} CommandOption
     * @property {number} type - The type of the option
     * @property {string} name - The name of the option
     * @property {string} description - The description of the option
     * @property {boolean} [default] - The first `required` option for the user to complete.
     *                                 Only one option can be `default`
     * @property {boolean} [required=false] - if the parameter is required or optional
     * @property {CommandOptionChoice[]} [choices] - choices for `string` and `int` types for the user
     *                                               to pick from
     * @property {CommandOption[]} [options] - 	if the option is a subcommand or subcommand group type,
     *                                          this nested options will be the parameters
     */

    /**
     * @typedef {Object} CommandInfo
     * @property {string} name - The name of this command
     * @property {string} description - The description of this command
     * @property {CommandOption[]} [options] - The parameters for the command
     */

    /**
     * @param {CommandInfo} info 
     */
    constructor(info) {
        
    }
}

module.exports = SlashCommand