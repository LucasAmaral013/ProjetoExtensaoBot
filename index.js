const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require ('telegraf');
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu'); 

const bot = new Telegraf(process.env.TOKEN);

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!\nEstou aqui pra te ensinar a programar!`)
})

const menuTemplate = new MenuTemplate<MyContext>(ctx => `Hey ${ctx.from.first_name}!`)

menuTemplate.interact('I am excited!', 'a', {
	do: async ctx => {
		await ctx.reply('As am I!')
		return false
	}
})

const menuMiddleware = new MenuMiddleware('/', menuTemplate)
bot.command('start', ctx => menuMiddleware.replyToContext(ctx))
bot.use(menuMiddleware)


bot.startPolling()