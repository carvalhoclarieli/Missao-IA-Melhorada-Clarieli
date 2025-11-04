const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Como você prefere passar o tempo?",
        alternativas: [
            {
                texto: "Estar em um ambiente tranquilo, lendo um livro ou refletindo.",
                afirmacao: [
                "Você valoriza momentos de introspecção e aprecia a profundidade das ideias. Gosta de se conectar consigo mesmo e recarregar suas energias no silêncio.",
                "A solidão não é um problema para você; é uma fonte de criatividade e paz.",
                "Seu lado pensativo busca sempre por conhecimento e autoconhecimento.",
                ]

            },
            {
                texto: "Estar com amigos, conversando e se divertindo.",
                afirmacao: [
                "Você é uma pessoa sociável que gosta da energia dos outros. Adora criar conexões e se sente vivo em meio a interações e risadas.",
                "Você tem facilidade em se comunicar e se torna o centro das atenções naturalmente em grupos.",
                "A troca de experiências e o convívio social são essenciais para o seu bem-estar e felicidade.",
                ]
                
            }
        ]
    },
    {
        enunciado: "Quando enfrenta um problema, qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "pensar calmamente  e analisar todas as possibilidades antes de agir.",
                afirmacao: [
                "Você prefere usar a razão e a lógica para resolver desafios. Gosta de planejamento e de encontrar soluções bem pensadas.",
                "Sua abordagem é metódica, garantindo que poucas coisas passem despercebidas antes de tomar uma decisão.",
                "Você evita decisões apressadas, preferindo a segurança de um plano bem estruturado.",
                ]

            },
            {
                texto: "Agir rapidamente e confiar na sua intuição para decidir.",
                afirmacao: [
                "Você é impulsivo e confia em seus instintos. Gosta de agir e ajustar o caminho conforme necessário.",
                "Você tem coragem para correr riscos e acredita que a experiência prática é a melhor forma de aprender.",
                "Sua energia e rapidez de resposta permitem que você saia rapidamente de situações estagnadas.",
                ]

            }
        ]
    },
    {
        enunciado: "Como você lida com mudanças inesperadas?",
        alternativas: [
            {
                texto: " Prefere manter a rotina e se sente desconfortável com surpresas.",
                afirmacao: [
                "Você valoriza a estabilidade e se sente mais seguro com o previsível. Mudanças podem gerar ansiedade, mas você se adapta com esforço.",
                "A ordem e a previsibilidade são fundamentais para o seu conforto emocional.",
                "Você constrói sua vida em bases sólidas e tem dificuldade em abandonar o que já é conhecido e seguro.",
                ]

            },
            {
                texto: "Encarar mudanças como oportunidades e se adapta facilmente.",
                afirmacao: [
                "Você é flexível e enxerga o novo como uma chance de crescimento. Gosta de se reinventar e abraçar o desconhecido.",
                "Você é resiliente e encontra soluções criativas em ambientes caóticos ou novos.",
                "O desafio de um novo cenário é algo que o motiva a sair da zona de conforto.",
                ]

            }
        ]
    },
    {
        enunciado: "Em um grupo, qual papel você costuma assumir?",
        alternativas: [
            {
                texto: "Observador, que escuta e apoia sem chamar muita atenção.",
                afirmacao: [
                "Você prefere ser um ponto de apoio, valorizando a harmonia do grupo. Sua presença tranquila é essencial para o equilíbrio.",
                "Sua capacidade de escuta é valiosa, e você capta detalhes que outros podem perder.",
                "Você é um mediador nato, contribuindo para que todos se sintam incluídos e ouvidos.",
                ]

            },
            {
                texto: "Líder, que toma a iniciativa e orienta os demais.",
                afirmacao: [
                "Você gosta de estar no comando, motivando e direcionando as pessoas. Assume responsabilidades e inspira confiança.",
                "Sua visão estratégica e determinação guiam o grupo em direção aos objetivos.",
                "Você se sente confortável em tomar decisões e é uma fonte de motivação para os outros.",
                ]

            }
        ]
    },
    {
        enunciado: "Qual dessas frases mais combina com você?",
        alternativas: [
            {
                texto: "A calma é a chave para a sabedoria.",
                afirmacao: [
                "Você valoriza a serenidade e acredita que pensar com clareza traz as melhores soluções.",
                "Você busca a profundidade das coisas, dedicando tempo à reflexão antes de emitir um julgamento.",
                "Para você, a paciência e a observação são ferramentas poderosas para entender o mundo.",
                ]

            },
            {
                texto: "A vida é uma aventura e deve ser vivida intensamente.",
                afirmacao: [
                "Você busca emoção e intensidade, acreditando que cada momento deve ser aproveitado ao máximo.",
                "Você não tem medo de se arriscar e está sempre em busca de novas experiências que o façam sentir-se vivo.",
                "A rotina o entedia facilmente, e você prefere um caminho cheio de surpresas e descobertas.",
                ]

            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível traduzir sua forma de aprender em palavras, diríamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();