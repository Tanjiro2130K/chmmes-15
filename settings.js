//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Anime⛩️Paradise" //ur yt chanel name
global.socialm = "GitHub: Tiku-Saikia" //ur github or insta name
global.location = "India, Assam, Jorhat" //ur location

//new
global.botname = 'Giyu-Tomioka🌸'  // ur bot name
global.ownernumber = '917086726371,917086810603' //ur owner number
global.ownername = 'TIKU✨🦋' //ur owner name
global.websitex = "https://youtube.com/@animeparadise9503?si=S8p5AwyutpL3H47s"
global.wagc = "https://chat.whatsapp.com/DQGWzesuDbz6Qq27pGyWlY"
global.themeemoji = '⛩️'
global.wm = "TIKU_BOTS"
global.botscript = 'PRIVATE' //script link
global.packname = "👾 Handcrafted for you"
global.author = "By Giyu-Tomioka🌸"
global.creator = "917086726371@s.whatsapp.net"
global.xprefix = '#'
global.premium = ["917086726371","917086810603"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['💮','🌀','🪶','💈','🌟','🧧','💠','🔖','🥢','🤖','🀄','🃏','🍥','🍀','🪭','🎍','🍂','📚','👒','🌊','🛍️']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
