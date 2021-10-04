module.exports = {
    name: "ping",
    description: "latency of the bot to discord",

    execute: async(client, message, args) => {
        return message.reply("Pong!")
    }
}