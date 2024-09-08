const chalk = require("chalk")
const fs = require("fs")

const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/.jpg", //ganti link gambar qris mu
      atas_nama: "FLAY OFFICIAL"
    },
    dana: {
      nomer: "089616437651", //ganti nomor danamu
      atas_nama: "FLAY OFFICIAL"
    },
    ovo: {
      nomer: "-", //Ovo Nonaktif 
      atas_nama: "-" 
    }
}

const apikeyAtlantic = "tempelapikeymu"
//AKUN H2H 
//https://atlantich2h.com (DISINI KALIAN BISA BUAT PROVIDER NYA)

//BUAT AKUN DISINI DULU
//https://m.atlantic-pedia.co.id/

  global.ownerNumber = "6289510340264@s.whatsapp.net" //ganti nomor mu yang mau dijadikan owner
  global.kontakOwner = "6289510340264" //ganti nomor mu yg mau dijadikan kontak owner
  global.untung = "1"
  //Ini profit yg kamu dapat, 1 = 1% maka harga akan meningkat 1%
  //Isi sesuai kebutuhan 
  global.namaStore = "FlayPedia" //ganti nama store mu, bebas
  global.botName = "FlayAtlantic" //ganti nama bot, bebas
  global.ownerName = "Flay Official" //ganti nama owner terserahmu
  
  
  global.linkyt = "https://youtube.com/" //ganti link yt mu kalo punya, kalo ga punya kosongin
  global.linkig = "https://instagram/" //ganti link ig mu kalo punya, kalo ga punya kosongin
  global.dana = "Transfer Ke Pembayaran Diatas"
  global.sawer = "Transfer Ke Pembayaran Diatas"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = { payment, apikeyAtlantic }
