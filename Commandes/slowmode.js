const config = require("../config.js");

exports.run = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **Erreur** Vous n'avez pas la permission !");
    if(!args[0]) return message.channel.send(`:x: **Erreur** Usage: \`${config.prefix}slowmode <time en s>\``)
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Le Slowmode a été mise à jour. (**${args[0]}s**)`)
}

module.exports.help = {
  name: "sm",
  aliases: ["slow", "slowmode", "Sm", "SM", "sM", "Slowmode", "bypass"]
}