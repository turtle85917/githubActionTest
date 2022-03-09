let { Client } = require('discord.js'),
    client = new Client({
        intents: [
            'GUILDS'
        ]
    });

client.login(process.env.TOKEN)