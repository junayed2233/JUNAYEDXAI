module.exports = {
 config: {
         name: "messivd",
         version: "1.0",
         author: "AceGun",
         countDown: 5,
         role: 0,
         shortDescription: "no prefix",
         longDescription: "no prefix",
         category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "fuck") {
 return message.reply({
 body: "Gat 🐐 
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Wr8zUcF.gif")
 }
 }
}
