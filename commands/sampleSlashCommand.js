const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  name: "ping",
  data: new SlashCommandBuilder().setName("ping").setDescription("Ping Pong!"),
  execute(client, interaction) {
    interaction.reply("Pong!");
  },
};
