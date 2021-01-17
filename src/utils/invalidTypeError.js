module.exports = function invalidTypeError(name, expected) {
    return new TypeError(`${name} must be a of type ${expected}`)
}