const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("610314999784800270")
setInterval(function() {
channel.send(`knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness knafhness`);
}, 30)
})

client.login(process.env.BOT_TOKEN);