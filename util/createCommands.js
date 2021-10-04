// You only need this file when using slash commands.
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = async () => {
  const commands = [];
  

  // Place your client and guild ids here
  const clientId = process.env.CLIENTID;
  const guildId = process.env.GUILDID;

  // register SLASH COMMANDS
  const slashFiles = fs.readdirSync("./slashCmds");
  for(const folder of slashFiles) {
    const files = fs.readdirSync(`./slashCmds/${folder}`)
    .filter(x => x.endsWith(".js"))

    for(const file of files) {
      const command = require(`../slashCmds/${folder}/${file}`);

      commands.push(command.data.toJSON())
    }
  }

  // register CONTEXT MENU COMMANDS
  const contextFiles = fs.readdirSync("./slashCmds");
  for(const folder of contextFiles) {
    const files = fs.readdirSync(`./slashCmds/${folder}`)
    .filter(x => x.endsWith(".js"))

    for(const file of files) {
      const command = require(`../slashCmds/${folder}/${file}`);

      commands.push(command)
    }
  }

  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    // For Global Slash Commands, use the following code instead:
    /** await rest.put(Routes.applicationCommands(clientId), {
      *   body: commands,
      * });
      **/

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
