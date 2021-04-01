import * as discord from 'discord.js'

const { token , prefix} = require('./config.json');

const client = new discord.Client();

client.once('ready', () => {
    console.log("Client connected to discord!");
})

client.on('message', (message) => {

    if(message.content == `${prefix}ping`) {
        message.channel.send("Pong");
    }

    console.log(message.content);
});

client.login(token)