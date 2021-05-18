const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require ('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const startMessage = 'Bem vindo, terráqueo!';
const sorryMessage = 'Lamento. ainda não tenho informações sobre isso!';

const base = [
    {
        chave: 'if',
        valor: 'um if é uma estrutura de releção.'
    }
]

bot.start((ctx) => ctx.reply(startMessage));

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