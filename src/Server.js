const axios = require('axios')

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
    }

    /**
     * Get main middleware
     * @returns {Function}
     */
    handler(options) {
        return function (req, res, next) {
            this.runMiddeware(req, res, next)
        }
    }

    /**
     * @private
     */
    runMiddleware(req, res, next, middleware) {
        if (middleware.length < 1) return
        middleware.shift()(req, res, error => {
            if (error !== undefined && error !== null && error !== 'route') {
                return next(error)
            }
            this.runMiddleware(middleware)
        })
    }


    /**
     * @private
     */
}

module.exports = Server
