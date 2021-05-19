const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require ('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const startMessage = 'Bem vindo, terráqueo!';
const helpMessage = 'Você pode começar me peguntando sobre alguns assuntos básicos como Linguagens de programação ou tipos de estruturas';
const sorryMessage = 'Lamento. ainda não tenho informações sobre isso!';

const base = [
    {
        chave: 'linguagens',
        valor: `Linguagens de programação é a linguagem com a qual conseguimos
        fornecer dados, ordens e ações para a criação de programas que são capazes
        de controlar o comportamento físico de uma máquina. Algumas linguagens
        de programação bastante conhecidas são Java, Python e HTML`
    },
    {
        chave: 'estruturas',
        valor: `Os dois tipos mais conhecidos de estruturas dentro da programação são
        as estruturas de Seleção e de Repetição. Qual das duas você gostaria de conhecer melhor?`
    }
]

bot.start((ctx) => ctx.reply(startMessage));
bot.help ((ctx) => ctx.reply(helpMessage));

bot.on('text', (ctx) => {
    //console.log (ctx);
    try{
        const resp = base.find(item => {
            return ctx.message.text.toLowerCase().includes(item.chave);
        })
        ctx.reply(resp.valor);
    }
    catch (err){
        console.log(err);
        ctx.reply(sorryMessage);
    }
})

//fazer o help e o settings
bot.launch();
process.once('SIGINT', () => bot.stop ("SIGINT"));
process.once("SIGTerm", () => bot.stop ("SIGTERM"));