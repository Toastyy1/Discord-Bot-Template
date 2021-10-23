// You only need this file, if you're using slash commands

module.exports = async (client, interaction) => {
  if (interaction.isCommand()) {
    const { commandName } = interaction;
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    // Your code here
  }
};