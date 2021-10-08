module.exports = {
    name: "avatar",
    type: 2, // 2 is for "USER" | 3 is for "MESSAGE" (EXECUTED BY RIGHT CLICKING EITHER)

    async execute(client, interaction) {
        const user = (await client.users.fetch(interaction.targetId));

        return interaction.reply(`${user.displayAvatarURL({ dynamic: true })}`)
    }
}