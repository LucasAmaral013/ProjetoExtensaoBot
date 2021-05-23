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

bot.startPolling()