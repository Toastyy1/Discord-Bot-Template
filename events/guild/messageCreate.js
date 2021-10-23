// You only need that file, if you're using commands with other prefixes than /
const prefix = process.env.PREFIX;

const validatePermissions = (permissions) => {
	const { Permissions } = require("discord.js");
	const validPermissions = Object.keys(Permissions.FLAGS);

	for (const permission of permissions) {
		if (!validPermissions.includes(permission)) {
			throw new Error(`Unknown permission node "${permission}"`);
		}
	}
};

module.exports = async (client, message) => {
	const { member, content, guild } = message;

	if (!content.startsWith(prefix) || message.author.bot) return;
	const args = content.slice(prefix.length).split(/ +/);
	const cmdName = args.shift().toLowerCase();
	const command = message.client.commands.get(cmdName)
       || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

	if (!command) return;

	let {
		permissions = [],
		permissionError = 'You are not authorized to execute this command!',
		requiredRoles = [],
		minArgs = 0,
		maxArgs = null,
		expectedArgs = '',
		execute,
		guildOnly,
	} = command;

	if (guildOnly && message.channel.type === 'dm') return message.reply('This command works only on a server!');

	// Ensure the permissions are in an array and are all valid
	if (permissions.length) {
		if (typeof permissions === 'string') {
			permissions = [permissions];
		}

		validatePermissions(permissions);
	}

	// Ensure the user has the required permissions
	for (const permission of permissions) {
		if (!member.permissions.has(permission)) {
			message.reply(permissionError);
			return;
		}
	}

	let roleCount = 0;
	let missingRole = '';

	// Ensure the user has the required roles
	for (const requiredRole of requiredRoles) {
		const role = guild.roles.cache.find(
			r => r.name === requiredRole,
		);

		if (role && member.roles.cache.has(role.id)) {
			roleCount++;
		}
		else {
			missingRole = requiredRole;
		}
	}

	if (roleCount === 0 && requiredRoles.length > 0) {
		return message.reply(
			`You need the "${missingRole}" role to use this command!`,
		);
	}

	// Ensure we have the correct number of arguments
	if (
		args.length < minArgs || (maxArgs !== null && args.length > maxArgs)
	) {
		return message.reply(
			`Wrong syntax! Try ${prefix}${command.name} ${expectedArgs}`,
		);
	}

	message.channel.sendTyping();

	if (guild.me.permissions.has('MANAGE_MESSAGES')) {
		message.delete()
			.then(() => {
				execute(client, message, args, Discord);
			})
		return;
	}

	execute(client, message, args, Discord);
};
