require('dotenv').config()
const { Telegraf } = require ('telegraf');

const bot = new Telegraf (process.env.TOKEN);

//Mensagens basicas
const startMessage = 'Bem vindo!';
const helpMessage = 'Sou fácil de usar. Basta perguntar!';
const settingsMessage = 'Ainda não tenho configurações para ajudar nisso';
const sorryMessage = 'Lamento. Ainda não sei nada a respeito.';

bot.start ((ctx) => ctx.reply(startMessage));
bot.help ((ctx) => ctx.reply(helpMessage));
bot.settings((ctx) => ctx.reply(settingsMessage));

const base = [
    {
        chave: 'if',
        valor: `if é uma estrutura de seleção presente em
        muitas linguagens de programação. Veja um exemplo
        em Java: if (condicao){ //código a ser executado se
        a condição for verdadeira}`
    
    },

    {
        chave: 'while',
        valor: `while é uma palavra reservada em muitas
        linguagens de programação. Veja um exemplo em Java:
        while (condicao {//código a ser repetido enquanto a
        condição for verdadeira}`
        
    },
    
    {
        chave: 'seleção',
        valor: `Estruturas de seleção permitem que o
        programador especifique trechos de código que devem
        ser executados somente quando determinadas
        condições - também especificadas por ele - forem
        avaliadas como verdadeiras.`
    
    },

    {
        chave: 'repetição',
        valor: `Estruturas de repetição podem ser utilizadas
        para automatizar a repetição de código. A ideia é
        permitir que o programador escreva uma única vez um
        bloco de código que deseja executar repetidamente
        ao invés de ter de copiar e colocar o bloco de
        código diversas vezes.`
    
    },

    {
        chave: 'batata',
        valor: 'Eu gosto de batata'
    }
]

bot.on('text', (ctx) => {
    try{
        const resp = base.find (item => { return ctx.message.text.toLowerCase().includes(item.chave) }); 
        ctx.reply(resp.valor);
    }
    catch (err){
        console.log (err)
        ctx.reply(sorryMessage);
    }
})

//fazer o help
bot.launch();
/*se nosso SO tentar interromper a execução do NodeJS,
avisamos os servidores do telegram*/
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

