const Commando = require('discord.js-commando')
const bot = new Commando.Client();
const TOKEN = 'NTQ2Mzg5OTM1NzI5NDEwMDUy.D0rf5g.ypJLiQFs_FsyL6sN2HLchcMgfXY'


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');





bot.login(TOKEN);
