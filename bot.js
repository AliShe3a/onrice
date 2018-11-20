var Discord = require("discord.js");
var prefix = "2!";
var client = new Discord.Client();

client.on("ready", () => {
  console.log("ready to rumble!");
});

var bannedwords = "fuck,shit,slut,whore".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("بس يا عرص");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send("An error occured!");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
});

client.login("token");


const RichEmbed = require("discord.js");

const { Client, Util } = require('discord.js');

const devs = ["357961207019470851"]

const adminprefix = "2!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Per")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setn')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 's')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "res") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });

  client.login("NTEzMzg0NzYwOTA3NjYxMzIy.DtWjog.PWqagJo6VSCfOuybL2_8P6Xx9OY");

  client.on('message', message => { (`**:white_check_mark: تم الارسال في الخاص  **`)
  if (message.content.startsWith(prefix + "help"))  { (`**:white_check_mark: تم الارسال في الخاص  **`)
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **─════════════ ⦁{✯الاوامر العامة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ معلومات حسابك ←** ' ,' **قريب** ')
.addField('     **→ سرعة استجابة البوت ←**  ' ,' **قريب** ')
.addField('     **→ للحصول علي رابط البوت ←**  ' ,' **كلم الاونر** ')
.addField('     **→ معلومات البوت ←** ' , '**قريب**') 
.addField('     **→ لمعلومات الروم←** ' , '**قريب**') 
.addField('     **→الافتار ←** ' ,' ** قريب**')
.addField('     **→ تاريخ اليوم←** ' , '**قريب**')
.addField('     **→ معلومات السيرفر ← ** ' ,' **  قريب  ** ')
.addField('     **→ لمعرفة حالة الاعضاء ← ** ' ,' **  قريب  ** ')
.addField('     **→ صأنع البوت ← ** ' ,' **  👑ãL̲ȋ̝̊̅̄Ǥã♏зѓ998👑 ** ')
.addField('     **─════════════ ⦁{✯الالعاب✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     **→ انجازات ماين كرافت ←  ** ' ,' **  قريب ** ')
.addField('     ** → كتابة كلام مثل كلايد بوت ←  ** ' ,' **  قريب ** ')
.addField('     ** → الزواج (مزحة) من الشخص ←  ** ' ,' **  قريب ** ')
.addField('     ** → حجر ورق مقص ←  ** ' ,' **قريب ** ')
.addField('     **─════════════ ⦁{✯اوامر الادارة✯}⦁ ════════════─** ' ,' **   ** ')
.addField('     ** → اععطاء العضو باند ←  ** ' ,' **  2!ban ** ')
.addField('     ** → طرد العضو من السيرفر ←  ** ' ,' **  2!kick ** ')
.addField('     ** → mute ←  ** ' ,' **  2!mute ** ')


.setColor('RANDOM')
message.author.sendEmbed(embed);
}
(`**:white_check_mark: تم الارسال في الخاص  **`)});

client.login("token");


client.on('message', async function (message)  {
  if(message.content.startsWith(prefix+"info")) { 
  const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
  const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size  
  message.channel.send(new discord.RichEmbed() 
  .setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
  .setURL(message.guild.iconURL)
  .addField('🆔 ايدي السيرفر', message.guild.id, true)
  .addField('👑 اونر السيرفر', message.guild.owner, true)
  .addField('🗺 منطقة', message.guild.region, true)
  .addField(`👥 الاعضاء [${message.guild.memberCount}]`, `${members} online` ,true)
  .addField(`💬 القنوات`, `**${message.guild.channels.filter(c => c.type === 'category').size}** الاقسام | **${message.guild.channels.filter(c=> c.type === 'text').size}**روم كتابي | **${message.guild.channels.filter(c=> c.type === 'voice').size}** روم صوتي` ,true)
  .addField(`💠 مستوى التحقق`, vlevel[message.guild.verificationLevel] ,true)
  .addField(`👔 الرتب`, message.guild.roles.size ,true)
  .addField(`📆 تم انشأوها`, message.guild.createdAt ,true)
  )
  }
  })

client.login("token")