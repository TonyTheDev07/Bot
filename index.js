require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({
        status: "online", 
        game: {
            name: "VoiD Developers",  
            type: "WATCHING" 
        }
    });
});

bot.on('message', msg => {
    if (msg.content === '$vdhelp') {
        msg.reply('VoiD Developers is a team that designs the discord servers. Also do moderation for already existing servers!');

    } else if (msg.content === '$help')
            msg.reply('Updating Soon!');
        } 
    }
});
