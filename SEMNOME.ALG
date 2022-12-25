Algoritmo "semnome"

Var

nota1, nota2, nota3, nota4, media: real
frequencia: inteiro
nome: caracter

Inicio
escreval("Qual � o seu nome?")
leia(nome)

escreval("Digite sua frenquencia")
leia(frequencia)

escreval("Qual foi a primeira nota?")
leia (nota1)

escreval("Qual foi a segunda nota?")
leia(nota2)

escreval("Qual foi a terceira nota?")
leia(nota3)

escreval("Qual foi a quarta nota?")
leia(nota4)

media <- (nota1+ nota2 + nota3+ nota4)/4
escreval ("Sua media � ", media)

se (media >= 7) e (frequencia >= 75%) entao
escreval(nome, " est� aprovado!")

senao
escreval(nome, " se fodeu!")

fimse

Fimalgoritmo


//Operação para calcular a média:

//Escrever o nome, escrever a frequência, em seguida as quatro notas.. O programa irá ler as informações, a divisão das quatro notas deverá ser maior ou igual a 7, e a frequência deverá ser maior ou igual a 75%, senão ele será reprovado.  

//escreval - saída de dados 

//leia - entrada de dados