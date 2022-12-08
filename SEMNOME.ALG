Algoritmo "semnome"

Var

nota1, nota2, nota3, nota4, media: real
frequencia: inteiro
nome: caracter

Inicio
escreval("Qual é o seu nome?")
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
escreval ("Sua media é ", media)

se (media >= 7) e (frequencia >= 75%) entao
escreval(nome, " está aprovado!")

senao
escreval(nome, " se fodeu!")

fimse

Fimalgoritmo