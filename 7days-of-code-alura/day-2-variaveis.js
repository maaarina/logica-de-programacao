/* 
============== Desafio DAY 2

O programa deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

var nome = prompt('Qual seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagem = prompt('qual linguagem de programação você esá estudando?')

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

console.log(`Você está gostando de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO`);

if (pergunta == 1) {
    console.log('Muito bom! continue estudando!')
} else {
    console.log('Ahh que pena...')
}
