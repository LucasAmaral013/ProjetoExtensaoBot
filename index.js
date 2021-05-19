const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require ('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!\nEstou aqui pra te ensinar a programar!`)
})

bot.on('text', (ctx, next) => {
    ctx.reply('mid1')
    next()
})

bot.on('text', (ctx, next) => {
    ctx.reply('mid2')
    next()
})

bot.startPolling()