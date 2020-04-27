const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const Command = require("../../struct/Command");
module.exports = class Cat extends Command{
    constructor(client){
        super(client,{
    name: "cat",
    description: "Finds cat.",
    });
}
    async run(message, args, ) {
        const { data: cat } = await axios.get("https://api.chewey-bot.top/cat", {
            headers: {
                "Authorization": this.client.config.cb_token
            }
        });
        const embed = new MessageEmbed()
            .setImage(cat.data)
            .setFooter("Powered by api.chewey-bot.top")
            .setColor("2f3136");

        return message.channel.send(embed);
    }
};
