require('dotenv').config();
const fs = require("fs");
const { Client, Intents, Collection } = require('discord.js');

// Create a new Discord client
const client = new Client({
    intents: [
        // Here's a list of all available intents. Enable only required ones

        // Intents.FLAGS.GUILDS,
        // Intents.FLAGS.GUILD_MEMBERS,
        // Intents.FLAGS.GUILD_BANS,
        // Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        // Intents.FLAGS.GUILD_INTEGRATIONS,
        // Intents.FLAGS.GUILD_WEBHOOKS,
        // Intents.FLAGS.GUILD_INVITES,
        // Intents.FLAGS.GUILD_VOICE_STATES,
        // Intents.FLAGS.GUILD_PRESENCES,
        // Intents.FLAGS.GUILD_MESSAGES,
        // Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        // Intents.FLAGS.GUILD_MESSAGE_TYPING,
        // Intents.FLAGS.DIRECT_MESSAGES,
        // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        // Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
});

client.commands = new Collection();

// Call all handlers to register commands and events
fs.readdirSync('./handlers').forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

// You only need this line, if you're using slash commands
// Register / reload slash commands
require('./util/createCommands')();

// Login to the bot
client.login(process.env.TOKEN);