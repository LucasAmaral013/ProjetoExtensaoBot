require('dotenv').config();
const { Telegraf } = require ('telegraf');
const Markup = require ('telegraf/markup')

const bot = new Telegraf (process.env.TOKEN);

const tecladoInicial = Markup.keyboard([
  ['Linguagens de programação'],
  ['Tipos de Estruturas'],
]).resize().extra()

bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}. Estou aqui para te ensinar programação!`)
  await ctx.reply(`O que gostaria de saber primeiro?`,
    Markup.keyboard(['teste1', 'teste2']).resize().oneTime().extra())
})

bot.hears(['teste1', 'teste2'], async ctx => {
  await ctx.reply('Entendido, vamos começar o aprendizado!')
  await ctx.reply('O que gostaria de aprender?', tecladoInicial)
})

bot.hears('Linguagens de programação', ctx => ctx.reply('explicação1'))
bot.hears('Tipos de Estruturas', ctx => ctx.reply('explicação2'))