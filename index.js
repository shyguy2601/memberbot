const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(token);
bot.on('ready',() =>{
   
   let myGuild = bot.guilds.cache.get('715034413532184587');
   let memberCount =  myGuild.memberCount;
   let MemberCountChannel = myGuild.channels.cache.get('740303217040293899');
   MemberCountChannel.setName('Member Count: ' + memberCount)
   console.log('ready');
})

bot.on('guildMemberAdd', member=>{
 let myGuild = bot.guilds.cache.get('715034413532184587');


   let memberCount =  myGuild.memberCount;
   let MemberCountChannel = myGuild.channels.cache.get('740303217040293899');
   MemberCountChannel.setName('Member Count:  ' + memberCount)
}) 

bot.on('guildMemberRemove', member =>{
 let myGuild = bot.guilds.cache.get('715034413532184587');
   let memberCount =  myGuild.memberCount;
   let MemberCountChannel = myGuild.channels.cache.get('740303217040293899');
   MemberCountChannel.setName('Member Count:  ' + memberCount)
})
bot.login(process.env.DISCORD_TOKEN);