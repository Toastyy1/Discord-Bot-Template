// You only need this file, if you're using slash commands

module.exports = async (client, interaction) => {
  // execute slash cmds
  if (interaction.isCommand()) {
    const command = client.slash.get(interaction.commandName);
    if (!command) return;

    try {
      await interaction.execute(client, interaction);
    } catch (error) {
      console.error(error)
    }
  }
  // execute context menu cmds
  if (interaction.isContextMenu()) {
    const command = client.context.get(interaction.commandName)
    if (!command) return;

    try {
      await interaction.execute(client, interaction);
    } catch (error) {
      console.error(error)
    }
  }
};