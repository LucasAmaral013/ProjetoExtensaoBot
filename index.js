require('dotenv').config();
const { Telegraf } = require ('telegraf');
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu');

const bot = new Telegraf (process.env.TOKEN);

//Mensagens basicas
const startMessage = 'Bem vindo!';
const helpMessage = 'Sou fácil de usar. Basta perguntar!';
const settingsMessage = 'Ainda não tenho configurações para ajudar nisso';
const sorryMessage = 'Lamento. Ainda não sei nada a respeito.';

bot.start ((ctx) => ctx.reply(startMessage));
bot.help ((ctx) => ctx.reply(helpMessage));
bot.settings((ctx) => ctx.reply(settingsMessage));


const menuTemplate = new MenuTemplate(ctx => 'Hello')

menuTemplate.interact('I am excited!', 'a', {
  do: async ctx => {
      ctx.reply('As am I!')
      return false
  }
})

const menuMiddleware = new MenuMiddleware('/', menuTemplate)
bot.command('menu', ctx => menuMiddleware.replyToContext(ctx))
bot.use(menuMiddleware)

bot.on('sticker', (ctx) => ctx.reply(':thumbsup:'))

//fazer o help
bot.launch();
/*se nosso SO tentar interromper a execução do NodeJS,
avisamos os servidores do telegram*/
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))