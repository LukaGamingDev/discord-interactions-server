const axios = require('axios')
const nacl = require('tweetnacl')

/**
 * The starting point of Discord Interactions Server
 */
class Server {
    /**
     * @typedef {Object} AuthOptions
     * @property {string} token - The authorization token
     * @property {string} [type=Bot] - The type of the authorization token
     */

    /**
     * @typedef {Object} ServerOptions
     * @property {AuthOptions} auth
     * @property {string} publicKey - The public key provided on your application page
     * @property {string} applicationId - The id of your application
     * @property {Object} [apiBaseURL=https://discord.com/api/v8] - Discord API base URL
     */

    /**
     * @param {ServerOptions} options 
     */
    constructor(options) {
        /**
         * @private
         * @type {AxiosInstance}
         */
        this.api = axios.create({
            baseURL: options.apiBaseURL,
            headers: {
                'Authorization': `${options.auth.type} ${options.auth.token}`
            }
        })

        /**
         * The public key
         * @type {string}
         */
        this.publicKey = options.publicKey

        /**
         * The auth options
         * @type {AuthOptions}
         */
        this.auth = options.auth

        /**
         * The id of your application
         * @type {string}
         */
        this.applicationId = options.applicationId
    }

    /**
     * Middleware
     * @param {*} req
     * @param {*} res
     */
    handler(req, res) {
        const signature = req.get('X-Signature-Ed25519');
        const timestamp = req.get('X-Signature-Timestamp');
        const rawBody = JSON.stringify(req.body)

        const isVerified = this.checkIsVerified({ signature, timestamp, rawBody })

        if (!isVerified) return res.status(401).json({
            message: 'The request signature you sent was invalid.'
        })


    }


    /**
     * @private
     */
    checkIsVerified({ signature, timestamp, rawBody }) {

        const isVerified = nacl.sign.detached.verify(
            Buffer.from(timestamp + rawBody),
            Buffer.from(signature, 'hex'),
            Buffer.from(this.publicKey, 'hex')
        )

        if (!isVerified) {
            return res.status(401).json({ message: 'invalid request signature' })
        }
        next()
    }
}

module.exports = Server
