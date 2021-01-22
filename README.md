<div align="center">
<h1>discord-interactions-server</h1>
<a href="https://www.npmjs.com/package/discord-interactions-server">
<img alt="npm" src="https://img.shields.io/npm/v/discord-interactions-server">
<img alt="npm" src="https://img.shields.io/npm/dw/discord-interactions-server">
<img alt="Libraries.io dependency status for latest release" src="https://img.shields.io/librariesio/release/npm/discord-interactions-server">
<img alt="NPM" src="https://img.shields.io/npm/l/discord-interactions-server">
    </a>
<div><a href="https://lukagamingdev.github.io/discord-interactions-server">View Documentation</a></div>
<br>
</div>

## About

[Express](https://expressjs.com/) Middleware to handle Discord interactions.  

This library handles the creation of commands, as well as updating and deleting. It also handles Security and Authorization.

## Installation

This is a [NodeJS](https://nodejs.org/) module available through the [npm registry](https://npmjs.com).  
Installation is done using the [`npm install` command:](https://docs.npmjs.com/downloading-and-installing-packages-locally)

```
$ npm install discord-interactions-server
```



## Example

<details>

<summary>Show code</summary>

```js
const express = require('express')
const { Server, SlashCommand } = require('discord-interactions-server')

const app = express()

const server = Server({
    applicationId: 'your client id',
    publicKey: 'your public key',
    authorization: 'Bot <my bot token>'
})

class HelloWorldCommand extends SlashCommand {
    constructor(server, guild) {
        super(server, guild, {
            name: 'hellooworld',
            description: 'Sends Hello World! with your message to the chat',
            options: [
                {
                    type: 3,
                    name: 'message',
                    description: 'The message to send',
                    required: true
                }
            ]
        })
    }

    execute(interaction, { message }) {
        interaction.respond({
            content: `Hello world! ${message}`
        })
    }
}

server.global.commands
    .addCommand(HelloWorldCommand)
    .update()

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})
```

</details>



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
