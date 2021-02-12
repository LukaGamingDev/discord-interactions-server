# Discord Interactions Server

Discord interactions middleware for Express

> Work In Progress

## Example

```js
const express = require('express')
const { Server, SlashCommand } = require('discord-interactions-server')

class MyCommand extends SlashCommand {
    constructor(manager) {
        super(manager, {
            name: 'ping',
            description: 'Sends a message back'
        })
    }

    run(interaction) {
        interaction.send('Pong! :ping_pong:')
    }
}

const app = express()
const server = new Server()

server
    .register(MyCommand)
    .update()

app.use(server.handler)

app.listen(3000)
```

## Getting Started

Read the [Getting Started](getting-started) guide