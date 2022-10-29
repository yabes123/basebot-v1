const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
        zenz: 'https://zenzapis.xyz'
}

global.APIKeys = {
	'https://danzzapi.xyz': 'danzz',
        'https://zenzapis.xyz': 'sonelstore'
}

// Other
global.apikey = ['danzz']
global.apikeyprem = ['razanxx']
global.namabot = ['Alvaro Bot']
global.namaowner = ['Yabes']
global.owner = ['6289522720791']
global.premium = ['6289522720791']
global.packname = '© Created By'
global.author = 'Danzz Coding | https://danzzapi.xyz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© Alvaro Bot'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
    premium: "unlimited",
    free: 100
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/cd0372ebf13b265f3feb5.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
