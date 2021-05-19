const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require ('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const startMessage = 'Bem vindo, terráqueo!';
const helpMessage = 'Você pode começar me perguntando sobre alguns assuntos básicos como Linguagens de programação ou tipos de estruturas';
const sorryMessage = 'Lamento. ainda não tenho informações sobre isso!';

const base = [
    {
        chave: 'linguagens',
        valor: `Linguagens de programação são a forma com a qual conseguimos
        fornecer dados, ordens e ações para a criação de programas que são capazes
        de controlar o comportamento físico de uma máquina. Algumas linguagens
        de programação bastante conhecidas são Java, Python e HTML`
    },
    {
        chave: 'estruturas',
        valor: `Os dois tipos mais conhecidos de estruturas dentro da programação são
        as estruturas de Condicionais e de Repetição. Qual das duas você gostaria de conhecer melhor?`
    },
    {
        chave:'condicionais',
        valor:`As estruturas condicionais possibilitam ao programa tomar decisões e alterar o 
        seu fluxo de execução. Isso possibilita ao desenvolvedor o poder de controlar quais 
        são as tarefas e trechos de código executados de acordo com diferentes situações, 
        como os valores de variáveis. As estruturas de repetição são o if/else e switch/case.
        Gostaria de ouvir mais sobre alguma delas?`
    },
    {
        chave: 'repetição',
        valor: `Estruturas de repetição, também conhecidas como loops (laços), são utilizadas 
        para executar repetidamente uma instrução ou bloco de instrução enquanto determinada 
        condição estiver sendo satisfeita. As principais estruturas de repetição na maioria 
        das linguagens são o for e o while. Gostaria de ouvir mais sobre alguma delas?`
    },
    {
        chave: 'if',
        valor: `O if/else é uma estrutura de condição em que uma expressão booleana é analisada. 
        Quando a condição que estiver dentro do if for verdadeira, ela é executada. 
        Já o else é utilizado para definir o que é executado quando a condição analisada 
        pelo if for falsa. Caso o if seja verdadeiro e, consequentemente executado, o else não 
        é executado.`
    },
    {
        chave: 'else',
        valor: `O if/else é uma estrutura de condição em que uma expressão booleana é analisada. 
        Quando a condição que estiver dentro do if for verdadeira, ela é executada. 
        Já o else é utilizado para definir o que é executado quando a condição analisada 
        pelo if for falsa. Caso o if seja verdadeiro e, consequentemente executado, o else não 
        é executado.`
    },
    {
        chave: 'switch',
        valor: `A estrutura condicional switch/case vem como alternativa em momentos em que temos 
        que utilizar múltiplos ifs no código. Múltiplos if/else encadeados tendem a tornar o código 
        muito extenso, pouco legível e com baixo índice de manutenção. O switch/case testa o valor 
        contido em uma variável, realizando uma comparação com cada uma das opções. Cada uma dessas 
        possíveis opções é delimitada pela instrução case. Podemos ter quantos casos de análise forem 
        necessários e, quando um dos valores corresponder ao da variável, o código do case 
        correspondente será executado. Caso a variável não corresponda a nenhum dos casos testados, 
        o último bloco será executado, chamado de default (padrão).`
    },
    {
        chave: 'case',
        valor: `A estrutura condicional switch/case vem como alternativa em momentos em que temos 
        que utilizar múltiplos ifs no código. Múltiplos if/else encadeados tendem a tornar o código 
        muito extenso, pouco legível e com baixo índice de manutenção. O switch/case testa o valor 
        contido em uma variável, realizando uma comparação com cada uma das opções. Cada uma dessas 
        possíveis opções é delimitada pela instrução case. Podemos ter quantos casos de análise forem 
        necessários e, quando um dos valores corresponder ao da variável, o código do case 
        correspondente será executado. Caso a variável não corresponda a nenhum dos casos testados, 
        o último bloco será executado, chamado de default (padrão).`
    },
    {
        chave: 'for',
        valor:`O for é uma estrutura de repetição que na qual seu ciclo será executado de acordo com 
        três variáveis. Quando utilizamos o for, precisamos de uma variável para auxiliar a controlar 
        a quantidade de repetições a serem executadas. Essa variável é chamada de variável de controle 
        e é declarada no primeiro argumento do for. O segundo argumento do for é utilizado para definir 
        até quando o for será executado. Geralmente, trata-se de uma condição booleana em cima da 
        variável de controle. O terceiro argumento indica o quanto a variável de controle será 
        modificada no final de cada execução dentro do for.`
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