require('dotenv').config();
const { Telegraf } = require ('telegraf');
const { Markup } = require ('telegraf');
const { Extra } = require ('telegraf');

const bot = new Telegraf (process.env.TOKEN);

// teclados Markup.keyboard

const tecladoInicial = Markup.keyboard([
  ['Quem é você?'], 
  ['Quero começar a aprender!'], 
  ['Ajuda', 'Sair']
]).resize().oneTime()

const tecladoOpcoes = Markup.keyboard([
  ['Linguagens de programação'],
  ['Tipos de Estruturas'],
  ['Tipos de Variáveis'],
  ['Sair']
]).resize()

const tecladoVariaveis = Markup.keyboard([
  ['int', 'float'],
  ['String', 'char'],
  ['double', 'boolean'],
  ['Voltar pras opções anteriores']
]).resize()

const tecladoEstruturas = Markup.keyboard([
  ['Estruturas Condicionais'],
  ['Estruturas de Repetição'],
  ['Voltar pras opções anteriores']
]).resize()

const tecladoCondicionais = Markup.keyboard([
  ['if/else', 'switch/case'],
  ['Voltar pros tipos de estruturas']
]).resize()

const tecladoRepeticao = Markup.keyboard([
  ['for', 'while', 'do-while'],
  ['Voltar pros tipos de estruturas']
]).resize()

// comandos básicos do bot
bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
  await ctx.reply(`Como posso te ajudar?`, tecladoInicial)
})

bot.help (async ctx => {
  await ctx.reply('Para navegar entre minhas opções, basta utilizar os botões que aparecem no canto inferior do chat.')
  await ctx.reply(`Abaixo estão algumas opções de comandos que você pode utilizar a qualquer momento da nossa conversa:

/start - Esse comando dá inicio ao chat. Você pode utilizá-lo sempre que quiser iniciar nossa conversa do zero

/help - Você pode utilizar esse comando para rever essa mensagem de ajuda

/menu - Esse comando mostra o primeiro menu de opções de aprendizado. Você pode utilizá-lo quando já estiver habituado com o meu funcionamento, e não quiser mais recomeçar o chat do zero.

Observação: Esses comandos não aparecerão nos botões do canto inferior do chat. Você deve utilizá-los digitando no teclado, ou clicando sobre eles.`)
})

// novos comandos do bot
bot.command('menu', ctx => ctx.reply('O que gostaria de aprender agora?', tecladoOpcoes))

// respostas ao Markup.keyboard
bot.hears('Quem é você?', async ctx => {
  await ctx.reply('Meu nome é C3-PO, e sou um robô programado para ensinar tudo sobre programação para novos desenvolvedores!')
  await ctx.reply('Gostaria de começar seu aprendizado?',
    Markup.keyboard(['Opa, vamos nessa!', 'Hoje não, fica pra próxima!']).resize())
})

bot.hears('Opa, vamos nessa!', async ctx => {
  await ctx.reply('Esse é o espírito!')
  await ctx.reply('O que gostaria de aprender primeiro?', tecladoOpcoes)
})

bot.hears('Hoje não, fica pra próxima!', async ctx => {
  await ctx.reply(`Que pena ${ctx.update.message.from.first_name}, espero te ver novamente em breve.`)
  await ctx.reply('Lembre-se que você pode sempre voltar a falar comigo usando o comando /start')
})

bot.hears('Quero começar a aprender!', async ctx => {
  await ctx.reply('Legal, vamos começar o aprendizado!')
  await ctx.reply('O que gostaria de aprender primeiro?', tecladoOpcoes)
}) 

bot.hears('Linguagens de programação', async ctx => {
  await ctx.reply('Linguagens de programação são a forma com a qual conseguimos fornecer dados, ordens' +
  ' e ações para a criação de programas que são capazes de controlar o comportamento físico de uma máquina.' +
  ' Algumas linguagens de programação bastante conhecidas são Java, Python e HTML')
  await ctx.reply('O que gostaria de aprender agora?', tecladoOpcoes)
})

bot.hears('Tipos de Variáveis', async ctx => {
  await ctx.reply('Quanto estamos desenvolvendo um código, é possível declarar variáveis informando' +
  ' o tipo de daos que ela irá receber (como números ou letras, por exemplo).')
  await ctx.reply('Esse é um recurso que utilizamos para armazenar um valor dentro da memóri, assim, sempre' +
  ' que precisarmos deste valor, basta referenciarmos essavariável.')
  await ctx.reply('O valor de uma variável pode ser alterado a qualquer momento no decorrer do códio,' +
  ' porém algumas linguagens como Java também permitem a declaração de uma constante, que possui um valor' +
  'estático até o final.')
  await ctx.reply('Qual tipo de variáveis gostaria de conhecer primeiro?', tecladoVariaveis)
})

bot.hears('int', async ctx => {
  await ctx.reply('A variável int armazena um número inteiro, positivo ou negativo.')
  await ctx.reply('Exemplos de variáveis ou contantes int são: -2, -1, 0, 1, 2.')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('float', async ctx => {
  await ctx.reply('Uma variável do tipo float armazena números reais (com ponto flutuante) com precisão simples.')
  await ctx.reply('Exemplos desse tipo seriam: 2.3, 4.1, 7.5')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('String', async ctx => {
  await ctx.reply('Uma String armazena um conjunto de caracteres, ou resumidamente, um texto.')
  await ctx.reply('Um exemplo de String seria: "Hello world".')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('char', async ctx => {
  await ctx.reply('Diferentemente de uma String, uma variável do tipo char armazena apenas um caractere.')
  await ctx.reply('Exemplos de variáveis char são: a, b, c.')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('double', async ctx => {
  await ctx.reply('Semelhante ao float, o double também armazena números reais, porém com precisão dupla.' +
  ' Em geral, o double possui uma precisão de 15 digitos decimais.')
  await ctx.reply('Um exemplo de variável double é: 3.68293819')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('boolean', async ctx => {
  await ctx.reply('A variável booleana pode representar apenas dois valores, sendo eles true ou false (em português, verdadeiro ou falso')
  await ctx.reply('Qual tipo de variável você gostaria de aprender agora?', tecladoVariaveis)
})

bot.hears('Tipos de Estruturas', async ctx => {
  await ctx.reply('Os dois tipos mais conhecidos de estruturas dentro da programação são as estruturas' +
  ' Condicionais e de Repetição.')
  await ctx.reply('Gostaria de conhecer melhor alguma dessas estruturas?', tecladoEstruturas)
})

bot.hears('Estruturas Condicionais', async ctx => {
  await ctx.reply('As estruturas condicionais possibilitam ao programa tomar decisões e alterar o seu fluxo' +
   ' de execução. Isso possibilita ao desenvolvedor o poder de controlar quais são as tarefas e trechos de código' +
   ' executados de acordo com diferentes situações, como os valores de variáveis.')
  await ctx.reply('As estruturas de repetição são o if/else e switch/case.')
  await ctx.reply('Gostaria de ouvir mais sobre alguma delas?', tecladoCondicionais)
})

bot.hears('Estruturas de Repetição', async ctx => {
  await ctx.reply('Estruturas de repetição, também conhecidas como loops (laços), são utilizadas para executar' +
  ' repetidamente uma instrução ou bloco de instrução enquanto determinada condição estiver sendo satisfeita.')
  await ctx.reply('As principais estruturas de repetição na maioria das linguagens são o for, while e do-while.')
  await ctx.reply('Gostaria de ouvir mais sobre alguma delas?', tecladoRepeticao)
})

bot.hears('if/else', async ctx => {
  await ctx.reply('O if/else é uma estrutura de condição em que uma expressão booleana é analisada. Quando' +
  ' a condição que estiver dentro do if for verdadeira, ela é executada.')
  await ctx.reply('Já o else é utilizado para definir o que é executado quando a condição analisada pelo if' +
  ' for falsa. Caso o if seja verdadeiro e, consequentemente executado, o else não é executado.', tecladoCondicionais)
})

bot.hears('switch/case', async ctx => {
  await ctx.reply('A estrutura condicional switch/case vem como alternativa em momentos em que temos que utilizar' +
  ' múltiplos ifs no código, pois múltiplos if/else encadeados tendem a tornar o código muito extenso, pouco' +
  ' legível e com baixo índice de manutenção.')
  await ctx.reply('O switch/case testa o valor contido em uma variável, realizando uma comparação com cada uma' +
  ' das opções. Cada uma dessas possíveis opções é delimitada pela instrução case.')
  await ctx.reply('Podemos ter quantos casos de análise forem necessários e, quando um dos valores corresponder' +
  ' ao da variável, o código do case correspondente será executado. Caso a variável não corresponda a nenhum dos' +
  ' casos testados, o último bloco será executado, chamado de default (padrão).', tecladoCondicionais)
})

bot.hears('for', async ctx => {
  await ctx.reply('O for é uma estrutura de repetição na qual seu ciclo será executado de acordo com três variáveis.')
  await ctx.reply('Quando utilizamos o for, precisamos de uma variável para auxiliar a controlar a quantidade de' +
  ' repetições a serem executadas. Essa variável é chamada de variável de controle e é declarada no primeiro' +
  ' argumento do for.')
  await ctx.reply('O segundo argumento do for é utilizado para definir até quando o for será executado. Geralmente,' +
  ' trata-se de uma condição booleana em cima da variável de controle.')
  await ctx.reply('O terceiro argumento indica o quanto a variável de controle será modificada no final de cada' +
  ' execução dentro do for.', tecladoRepeticao)
})

bot.hears('while', async ctx => {
  await ctx.reply ('Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido.')
  await ctx.reply ('Com o while, o corpo do laço de repetição com seus respectivos comandos apenas será executado' +
  ' se a condição for verdadeira. Portanto, assim que a condição não for mais verdadeira, o conteúdo não será mais repetido.')
  await ctx.reply ('O que gostaria de aprender agora?', tecladoRepeticao)
})

bot.hears('do-while', async ctx => {
  await ctx.reply ('O do/while tem quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.')
  await ctx.reply ('O que gostaria de aprender agora?', tecladoRepeticao)
})

bot.hears('Voltar pros tipos de estruturas', async ctx => {
  await ctx.reply ('O que gostaria de aprender agora?', tecladoEstruturas)
})

bot.hears('Voltar pras opções anteriores', async ctx => {
  await ctx.reply('O que gostaria de aprender agora?', tecladoOpcoes)
})

bot.hears('Ajuda', async ctx => {
  await ctx.reply('Para navegar entre minhas opções, basta utilizar os botões que aparecem no canto inferior do chat.')
  await ctx.reply(`Abaixo estão algumas opções de comandos que você pode utilizar a qualquer momento da nossa conversa:
  
/start - Esse comando dá inicio ao chat. Você pode utilizá-lo sempre que quiser iniciar nossa conversa do zero

/help - Você pode utilizar esse comando para rever essa mensagem de ajuda

/menu - Esse comando mostra o primeiro menu de opções de aprendizado. Você pode utilizá-lo quando já estiver habituado com o mu funcionamento, e não quiser mais recomeçar o chat do zero.

Observação: Esses comandos não aparecerão nos botões do canto inferior do chat. Você deve utilizá-los digitando no teclado, ou clicando sobre eles.`)
})

bot.hears('Sair', async ctx => {
  await ctx.reply(`Tudo bem ${ctx.update.message.from.first_name}, nos vemos na próxima!`)
  await ctx.reply('Lembre-se que você pode sempre voltar a falar comigo usando o comando /start')
})

bot.startPolling()