//OUTROS ATRIBUTOS
let container = document.querySelector('.container')
let cabeca = document.querySelector('.logo')
let alternativas = document.querySelector('#alternativas')
let info = document.querySelector('#infoFim')
let linha = document.querySelector('#linha')

//Pontuação
let pontos = 0
let pontuacao = document.querySelector('#pontos')
let titulo = document.querySelector('#titulo')

//QUESTÃO 
let numquestao = document.querySelector('#numquestao')
let pergunta = document.querySelector('#pergunta')

//ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


const q0 = {
    questao : 0,
    pergunta : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta : "0",
}

const q1 = {
    questao : 1,
    pergunta: "Que Ano Foi Descoberto O Brasil ?",
    alternativaA : "2000",
    alternativaB : "1600",
    alternativaC : "1500",
    alternativaD : "1400",
    correta : "1500",
}

const q2 = {
    questao : 2,
    pergunta : "Qual Foi O Primeiro Presidênte Do Brasil",
    alternativaA: "Deodoro da Fonseca",
    alternativaB : "Vasco Da Gama",
    alternativaC : "Getulho Vargas",
    alternativaD : "Prudente De Moraes",
    correta: "Deodoro da Fonseca",
}

const q3 = {
    questao : 3,
    pergunta : "Que Dia Foi a Independência Do Brasil",
    alternativaA : "07/09/1821",
    alternativaB : "07/09/1822",
    alternativaC : "07/08/1822",
    alternativaD : "07/09/1820",
    correta: "07/09/1822", 
}

const q4 = {
    questao : 4,
    pergunta: "De quem é a famosa frase “Penso, logo existo”?",
    alternativaA: "Platão",
    alternativaB: "Galileu Galilei",
    alternativaC: "Descartes",
    alternativaD: "Sócrates",
    correta: "Descartes",
}

const q5 = {
    questao : 5,
    pergunta: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    alternativaA: "Jânio Quadros",
    alternativaB: "Jacinto Anjos",
    alternativaC: "Getúlio Vargas",
    alternativaD: "João Figueiredo",
    correta: "João Goulart.",
}

const q6 = {
    questao : 6,
    pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    alternativaA: "12 minutos",
    alternativaB: "1 dia",
    alternativaC: "12 horas",
    alternativaD: "8 minutos",
    correta: "8 minutos",
}
const q7 = {
    questao : 7,
    pergunta: "Qual o maior animal terrestre?",
    alternativaA: "Baleia Azul",
    alternativaB: "Dinossauro",
    alternativaC: "Elefante africano",
    alternativaD: "Tubarão Branco",
    correta: "Elefante africano",
}
const q8 = {
    questao : 8,
    pergunta: "Quantas casas decimais tem o número pi?",
    alternativaA: "Duas",
    alternativaB: "Centenas",
    alternativaC: "Infinitas",
    alternativaD: "Vinte",
    correta: "Infinitas",
}
const q9 = {
    questao : 9,
    pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui ?",
    alternativaA: "113",
    alternativaB: "109",
    alternativaC: "108",
    alternativaD: "118",
    correta: "118",
}
const q10 = {
    questao : 10,
    pergunta: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    alternativaA: "Japão e Serra Leoa",
    alternativaB: "Austrália e Afeganistão",
    alternativaC: "Itália e Chade",
    alternativaD: "Brasil e Congo",
    correta: "Japão e Serra Leoa",
}
// VETOR DE TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
// COLOCANDO A QUANTIDADE DE QUESTOES
let numero = document.querySelector('#infoquestao')
let total = document.querySelector('#totalquestao')

numero.textContent = q1.questao

let totaldequestoes = (questoes.length)-1
total.textContent = totaldequestoes

// MONTANDO A PRIMEIRA QUESTAO
numquestao.textContent = "Questão " + q1.questao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

//CONFIGURANDO O VALUE DA PRIMEIRA QUESTAO
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

//MONTANDO AS PROXIMAS QUESTOES
function proximaQuestao (nQuestao) {
    numero.textContent = nQuestao
    numquestao.textContent = "Questão " + questoes[nQuestao].questao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao +'A')
    b.setAttribute('value', nQuestao +'B')
    c.setAttribute('value', nQuestao +'C')
    d.setAttribute('value', nQuestao +'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

//VERIFICANDO SE ACERTOU A QUESTAO
function verificaseAcertou(nQuestao, resposta) {
    let numerodaquestao = nQuestao.value
    // console.log("Questao " + numerodaquestao)

    let respostaEscolhida = resposta.textContent
    // console.log("Resposta " + respostaEscolhida)

    let certa = questoes[numerodaquestao].correta
    // console.log("RespC" + certa)

    if(respostaEscolhida == certa) {
        // console.log("Mais 10")
        pontos += 10
    }
    else {
        // console.log("Errou!!")
    }

    //BLOQUEANDO ALTERNATIVAS
    bloquearAlternativas()

    //ATUALIZAR PLACAR
    placar = pontos
    titulo.textContent = "Quiz - Pontos " 
    pontuacao.textContent = placar
    setTimeout(function() {
        proxima = numerodaquestao + 1

        if(proxima > totaldequestoes) {
            console.log("Fim De Jogo")
            FimDoJogo()
            
        }else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function FimDoJogo() {
    titulo.textContent = "Fim De Jogo"
    pontuacao.textContent = ""
    numquestao.textContent = ""
    pergunta.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = "pontos"
    info.textContent = "Voce Consegiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    //OCULTAR QUESTAO 
    alternativas.style.display = 'none'
    linha.style.display = 'none'

    // Outros 
    info.style.marginTop = '100px'
    
    // Comecar De Novo
    setTimeout(function() {
        location.reload();
    }, 2000)
}
