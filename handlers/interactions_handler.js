const fs = require("fs");

module.exports = (client) => {
    // slash commands handler
    const slashFiles = fs.readdirSync("./slashCmds");
    for (const folder of slashFiles) {
        const files = fs.readdirSync(`./slashCmds/${folder}`)
            .filter(x => x.endsWith(".js"))

        for (const file of files) {
            const cmd = require(`../slashCmds/${folder}/${file}`)

            client.slash.set(cmd.data.name, cmd)
        }
    }

    // context menu handler
    const contextFiles = fs.readdirSync("./contextCmds");
    for (const folder of contextFiles) {
        const files = fs.readdirSync(`./contextCmds/${folder}`)
            .filter(x => x.endsWith(".js"))

        for (const file of files) {
            const cmd = require(`../contextCmds/${folder}/${file}`)

            client.context.set(cmd.name, cmd)
        }
    }
}