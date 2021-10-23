module.exports = client => {
	client.user.setActivity('<Your activity message>', { type: 'PLAYING' });
	console.log('Bot is online!');
};