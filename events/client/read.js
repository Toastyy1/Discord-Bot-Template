module.exports = async client => {
	client.user.setActivity('<Your activity message>', { type: 'PLAYING' });
	console.log('Bot is online!');
};