import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `true`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '22231507309'
let nombre2 = '212677235022'
 
const s = [
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg',
'https://telegra.ph/file/995d8b1203e7933352d29.jpg'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /ويلميس|ويلميس|ويلميس|ويلميس/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
