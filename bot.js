var TelegramBot = require('node-telegram-bot-api');

var token = '569991221:AAEYlk0DShlY58whb8_QiarAMNe-yz65zwg';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
bot.onText( /Algunas veces/, function( msg ) {

  bot.sendMessage(

      msg.from.id,

      "No te conozco",
  );

} );
