// # Exercício 2 - Leia o código abaixo, e responda:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

console.log("a)",filme.elenco[0]);

// b) Qual o código para imprimir o nome do **último** ator/atriz?

// No primeiro console, eu apenas indiquei o índice 3 sabendo se tratar do quarto e último ator.
console.log("b)",filme.elenco[3]);

// Se fosse um Array muito grande ou que não houvesse visibilidade de todos os atores, a técnica mais apurada seria trazer o último elemento do Array utilizando a propriedade lenght -1. Na primeira vez que escrevi o código para trazer essa resposta pelo lenght, eu criei uma variável arrayElenco na qual eu armazenei a propriedade elenco (a qual tem um Array como valor), e depois fiz o console.log com o nome da variável e o método que nos devolve o último elemento do Array. No entanto, logo aqui na linha abaixo, após ver os exercícios dos colegas, ficou mais claro que eu também poderia fazer direto em uma única linha do console.log, chamando a propriedade pela notação de ponto com o nome do objeto filme, e em seguida dentro dos colchetes, repetimos filme.elenco e aplicamos o .lenght-1, e assim tivemos um código mais simplificado com o mesmo resultado. No Console, a letra b) aparece 3 vezes então com o nome da atriz Virginia Cavendish.

console.log("b)",filme.elenco[filme.elenco.length-1]);

const arrayElenco = filme.elenco
console.log("b)",arrayElenco[arrayElenco.length-1])

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?

// Aqui abaixo mesmo cenário da letra b), eu nem precisaria ter criado a variável que criei, dava pra ter feito direto no console como na linha logo abaixo desse comentário. De qualquer forma, ter esse variável me permitiu usá-la na questão d), o que talvez tenha simplificado pelo menos a letra d).
console.log("c)",filme.transmissoesHoje);

const todasAsTransmissoes = filme.transmissoesHoje
console.log("c)",todasAsTransmissoes);

// d) Qual o código para exibir o **horário** de transmissão do filme no **Canal Brasil**?

// Mesmo caso das letras b) e c), dava pra ter chamado a propriedade direto no console.log sem criar as variáveis que criei, conforme vemos na linha logo abaixo.
console.log("d)",filme.transmissoesHoje[1].horario);

console.log("d)",todasAsTransmissoes[1].horario);

// **Dica:** construa os caminhos para chegar em cada valor **aos poucos**, sempre verificando o que é exibido no console.

