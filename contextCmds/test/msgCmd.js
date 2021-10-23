module.exports = {
    name: "content",
    type: 3, // 2 is for "USER" | 3 is for "MESSAGE" (EXECUTED BY RIGHT CLICKING EITHER)

    async execute(client, interaction) {
        const message = (await interaction.channel.messages.fetch(targetId));

        return interaction.reply(`User said: ${message.content}`);
    }
}