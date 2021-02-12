/**
 * A Command Option Type
 * @typedef {number}
 */
const CommandOptionType = {
    SUB_COMMAND: 1,
    SUB_COMMAND_GROUP: 2,
    STRING: 3,
    INTEGER: 4,
    BOOLEAN: 5,
    USER: 6,
    CHANNEL: 7,
    ROLE: 8
}

module.exports = {
    Server: require('./Server'),
    CommandOptionType
}
