module.exports = {
	name: "previous",
    description: "Plays the previous song",
    usage: "previous",
    guildOnly: true,
    category: "music",
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
        const client = message.client;
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        try {
            const song = queue.previous()
            message.channel.send(`Now playing:\n${song.name}`)
        } catch (e) {
            message.channel.send(`${e}`)
        }
	},
};
