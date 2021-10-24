module.exports = {
    // Just some example attributes
	name: 'name',
	guildOnly: true,
	minArgs: 1,
	maxArgs: 1,
	expectedArgs: '<name>',
	permissions: ['ADMINISTRATOR'],
	execute: async (message, args) => {
        message.channel.send(`Hello ${args[0]}!`);
	},
};