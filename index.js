require('dotenv').config();
const { Telegraf } = require ('telegraf');
const { Markup } = require ('telegraf');

const bot = new Telegraf (process.env.TOKEN);

const tecladoOpcoes = Markup.keyboard([
  ['Linguagens de programação'],
  ['Tipos de Estruturas'],
  ['Tipos de Variáveis'],
]).resize()

bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
  await ctx.reply(`Como posso te ajudar?`,
    Markup.keyboard(['Quem é você?', 'Quero começar a aprender!']).resize())
})

bot.hears('Quem é você?', async ctx => {
  await ctx.reply('Meu nome é C3-PO, e sou um robô programado para ensinar tudo sobre programação para novos desenvolvedores!')
  await ctx.reply('Gostaria de começar seu aprendizado?',
    Markup.keyboard(['Opa, vamos nessa!', 'Hoje não, fica pra próxima!']).resize().oneTime())
})

bot.hears('Opa, vamos nessa!', async ctx => {
  await ctx.reply('Esse é o espírito!')
  await ctx.reply('O que gostaria de aprender primeiro?', tecladoOpcoes)
})

bot.hears('Hoje não, fica pra próxima!', async ctx => {
  await ctx.reply('Que pena, espero te ver novamente em breve')
  await ctx.reply('Lembre-se que você pode sempre voltar a falar comigo usando o comando /start')
})

bot.hears('Quero começar a aprender!', async ctx => {
  await ctx.reply('Legal, vamos começar o aprendizado!')
  await ctx.reply('O que gostaria de aprender primeiro?', tecladoOpcoes)
}) 

bot.hears('Linguagens de programação', async ctx => {
  await ctx.reply(`Linguagens de programação são a forma com a qual conseguimos fornecer dados, ordens e ações para a criação de programas que são capazes de controlar o comportamento físico de uma máquina. Algumas linguagens de programação bastante conhecidas são Java, Python e HTML`)
  await ctx.reply('O que gostaria de aprender agora?', tecladoOpcoes)
})

bot.hears('Tipos de Estruturas', ctx => 
  ctx.reply(`Os dois tipos mais conhecidos de estruturas dentro da programação são as estruturas Condicionais e de Repetição. Gostaria de conhecer melhor alguma dessas estruturas?`,
  Markup.keyboard(['Estruturas Condicionais', 'Estruturas de Repetição', 'Voltar pras opções anteriores']).resize()))


  
  /*bot.hears('Tipos de Variáveis', ctx.reply(`Opa, ainda estou aprendendo sobre isso!`))

  bot.hears('Estruturas Condicionais', ctx.reply(`Opa, ainda estou aprendendo sobre isso`))

  bot.hears('Estruturas de Repetição', ctx.reply(`Opa, ainda estou aprendendo sobre isso`))*/

  bot.hears('Voltar pras opções anteriores', async ctx => {
    await ctx.reply('O que gostaria de aprender agora?', tecladoOpcoes)
  })

bot.startPolling()