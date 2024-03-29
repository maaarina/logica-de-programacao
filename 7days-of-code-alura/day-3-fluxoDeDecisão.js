/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.*/

const pergunta1 = prompt("você deseja seguir para a área de front-end ou back-end?");

if (pergunta1 === "front-end") {
    console.log("Legal, também estudo front-end");
    prompt("Você deseja aprender Vue ou React?");
} else {
    console.log("Show!");
    prompt("Você deseja aprender c# ou Java?");
}

const pergunta2 = prompt(`Você deseja continuar na área de ${pergunta1} ou pretende seguir se desenvolvendo para se tornar FullStack? (Responda 1 para ${pergunta1} ou 2 para Fullstack)`);

if (pergunta2 === "1") {
    console.log("Legal!");
} else {
    console.log("Ótimo, continue estudando");
}

/*
const pergunta3 = prompt("Você deseja aprender mais alguma tecnologia? Digite 'sim' em caso positivo ou 'não' em caso negativo");

while (pergunta3 === "sim") {
    let novaTecnologia = prompt("Qual?");

    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo.");

    break
} problema com o loop*/
