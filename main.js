let lista_de_amigos_fix = [
    {id: 'jorel', nome: 'Jorel', frase: 'Ei cara, '},
    {id: 'anette', nome: 'Anete', frase: 'Ai, ai, '},
    {id: 'jorge', nome: 'Jorge', frase: 'E ai mano, '},
    {id: 'haoryas', nome: 'Haoryas', frase: 'Deixa eu falar, '},
    {id: 'miguel', nome: 'Miguel', frase: 'Então, '},
    {id: 'arthur', nome: 'Arthur'},
    {id: 'maria_eduarda', nome: 'Maria Eduarda', frase: 'Oi bixo, '},
    {id: 'regina', nome: 'Regina', frase: 'Então, '},
    {id: 'patricia', nome: 'Patricia', frase: 'Certo, '},
    {id: 'sanchez', nome: 'Sanchez', frase: 'Ei cara, '},
    {id: 'estranho', nome: 'Cara estranho', frase: 'Quer saber, pois '},
]

let lista_de_amigos = shuffle_arr(lista_de_amigos_fix)

let relogio = 'ele queria ver as horas num relógio ou num despertador. Bicho estranho'
let roupas = 'vi ele afofando um monte de roupas. Acho que ia deitar em cima.'
let almofada = 'ele deixou uma almofada cheia de pelos. Ainda bem que não sou alérgico.'
let lencol = 'disseram que ele fez xixi em um lençol de cama. Quem nunca, né?'
let torneira = 'eu vi ele abrir a torneira para beber água. Ele é tão fofinho com aquela linguinha!'
let cadeira = 'ele estava dormindo bonitinho em uma cadeira aí...'
let toalha_mesa = 'disseram que ele subiu numa mesa para pedir biscoito de gato, mas ninguém tinha.'
let produto_de_limpeza = 'onde ele estava tinha cheiro de produto de limpeza. Isso não é perigoso?'
let tapete = 'Todo mundo parou para ver ele ficar rolando no tapete. Acho que já tem foto na internet, já.'
let ar_puro = ' ele queria um ar puro. Estava até curtindo o vento no focinho.'

let estes_locais = [
    {   data: 'sala', 
        nome: 'Sala de Estar', 
        descricao: 'Aparentemente houve uma batalha campal aqui. Pessoas caidas gemem entre pesadelos e dores nas costas e esse cenário só é cortado pelo grupo de amigos que varou a noite tentando zerar um jogo obscuro para um video game já fora de linha.',
        pistas: [
            almofada,
            cadeira,
            tapete
            
        ]
    },
    {
        data: 'cozinha', 
        nome: 'Cozinha', 
        descricao: 'Sua cozinha esta uma bagunça, com uma pilha de louça suja e no fundo da pia uma substância gelatinosa que pode ou não estar tentando entrar em contato com seu planeta natal. Alguns amigos parecem estar perdidos aqui. O que você gostaria de perguntar?',
        pistas: [
            relogio,
            cadeira,
            torneira,
            toalha_mesa
        ]
    },
    {
        data: 'banheiro', 
        nome: 'Banheiro', 
        descricao: 'Seu banheiro parecia ter sido inspirado no que havia de mais chique nas revistas de design. Agora ele parece o que há de mais chique nas revistas de descarte de resíduos tóxicos. Tem algumas almas perdias ali disputando o que um dia foi um lindo vaso sanitário',
        pistas: [
            torneira,
            tapete,
            produto_de_limpeza
        ]
    },
    {
        data: 'quarto', 
        nome: 'Quarto', 
        descricao: 'Seu quarto sempre foi o lugar mais quente e aconchegante desta casa e, aparentemente, um grupo de amigos também concorda com você. Só não concordam se o melhor lugar para a soneca é o guarda-roupa ou o criado-mudo.',
        pistas: [
            relogio,
            roupas,
            almofada,
            lencol
        ]
    },
    {
        data: 'lavanderia', 
        nome: 'Lavanderia', 
        descricao: 'Esta é a lavanderia',
        pistas: [
            lencol,
            toalha_mesa,
            torneira,
            produto_de_limpeza
        ]
    },
    {
        data: 'varanda', 
        nome: 'Varanda',
        escricao: 'Esta é a Varanda',
        pistas: [
            torneira,
            cadeira,
            ar_puro
        ]
    }
    
]

// let amigo_responde = {
//     nome: 'Jorel',
//     texto: 'Acho que vi seu gato na cozinha'
// }

let tempo = 0;

let pontuacao = 0;

let controle = 0;


$(document).ready(function(){
    //Inicio
    inicio_do_jogo();

    // perguntar para alguem
    $(document).on('click', '.inicio', function(event) {
        //amigos_nesta_sala(lista_de_amigos, estes_locais[controle])
        esta_sala_aqui(estes_locais[controle])
    })

    // Quando vc escolhe um amigo para perguntar    
    $(document).on('click', '.perg_pers', function(event) {
        // pessoa_responde(amigo_responde)
        let id_amigo = $(this).attr('data-amigo');
        let posicao = $(this).attr('data-pos');
        pessoa_responde(id_amigo,posicao,estes_locais[controle+1])
        
    })

    //Se for perguntar para mais amigos
    $(document).on('click', '.perguntar_alguem', function(event) {
        lista_de_amigos = shuffle_arr(lista_de_amigos_fix)
        amigos_nesta_sala(lista_de_amigos,estes_locais[controle])
    })

    //se for procurar em algum lugar
    $(document).on('click', '.locais_casa', function(event) {
        locais_da_casa(define_proximos_locais())
    })

    $(document).on('click', '.local', function(event) {
        console.log(estes_locais)
        let dois_errados_um_certo = []
        let index_correto 
        let proximo_local = $(this).attr('data-local');
        let jujuba = estes_locais.length-2;
        console.log('jujuba = '+jujuba)
                console.log('pontuacao = '+pontuacao)
                //console.log('estes_locais.length = '+estes_locais.length)
        if (pontuacao == jujuba) {
            alert('Você achou seu gato')
        } else {
            if (proximo_local == estes_locais[(controle+1)].data) {
                pontuacao++
                jujuba = (pontuacao+1)
                controle = pontuacao
                pista_do_gato();
                setTimeout(function(){
                    esta_sala_aqui(estes_locais[controle])
                },2500)
            }
            else if (proximo_local == estes_locais[pontuacao].data) {
                controle = pontuacao
                esta_sala_aqui(estes_locais[pontuacao])
            }
            else {
                controle++
                for (let index = 0; index < estes_locais.length; index++) {
                    if (proximo_local ==  estes_locais[index].data) {
                        index_correto = [index]
                    }
                }
                esta_sala_aqui(estes_locais[index_correto])
            }
        }
        
    })  

})

function esta_sala_aqui(local_atual) {
    $('.content').html(
        '<section class="nes-container with-title">'+
        '<h2 class="title">Você esta em '+local_atual.nome+'</h2>'+
        '<p>'+local_atual.descricao+'</p>'+
        '<div class="containers">'+
        '</div>'+
        '<button class="nes-btn locais_casa">procurar em algum cômodo</button>'+
        '<button class="nes-btn perguntar_alguem" >Perguntar para alguém</button>'+
        '</div>'+
        '</section>'
    )
}

function amigos_nesta_sala(lista_amigo, local_atual) {    
    $('.content').html(
        '<section class="nes-container with-title">'+
        '<h2 class="title">Você esta em '+local_atual.nome+'</h2>'+
        '<p>'+local_atual.descricao+'</p>'+
        '<div class="containers">'+
        '<button class="nes-btn perg_pers perg_pers_1" data-pos="0" data-amigo="'+lista_amigo[0].id+'">Perguntar para '+lista_amigo[0].nome+'</button>'+
        '<button class="nes-btn perg_pers perg_pers_2" data-pos="1" data-amigo="'+lista_amigo[1].id+'">Perguntar para '+lista_amigo[1].nome+'</button>'+
        '<button class="nes-btn perg_pers perg_pers_3" data-pos="2" data-amigo="'+lista_amigo[2].id+'">Perguntar para '+lista_amigo[2].nome+'</button>'+
        '</div>'+
        '</section>'
    )
}

function pessoa_responde(id_pessoa,posicao,arr_frases) {
    let frases = arr_frases.pistas;
    console.log(frases)
    let pessoa = {};
    if (pontuacao < controle){
        frases = ['foi mal ai...','não vi não.','gato? Qual gato?']
    }
    for (let index = 0; index < lista_de_amigos.length; index++) {
        if (lista_de_amigos[index].id == id_pessoa) {
            pessoa = {
                nome: lista_de_amigos[index].nome,
                texto: lista_de_amigos[index].frase + frases[posicao],
            }
        }
    }

    // console.log(frases)

    $('.content').html(
        '<section class="nes-container with-title">'+
        '<h2 class="title">'+pessoa.nome+'</h2>'+
        '<div class="containers">'+
        '<p class="nes-balloon from-left">'+pessoa.texto+'</p>'+
        '<div class="containers">'+
        '</div>'+
        '<button class="nes-btn locais_casa">procurar em algum cômodo</button>'+
        '<button class="nes-btn perguntar_alguem">Perguntar para mais Alguém</button>'+
        '</div>'+
        '</section>'
    )
}

function locais_da_casa(locais_ativos) {
    $('.content').html(
        '<section class="nes-container is-dark with-title">'+
        '<h2 class="title">Onde esse gato deve estar?</h2>'+
        '<div class="containers">'+
        '<p>Locais da casa</p>'+
        '<div class="containers">'+
        '<button class="nes-btn local" data-local="'+locais_ativos[0].data+'">'+locais_ativos[0].nome+'</button>'+
        '<button class="nes-btn local" data-local="'+locais_ativos[1].data+'">'+locais_ativos[1].nome+'</button>'+
        '<button class="nes-btn local" data-local="'+locais_ativos[2].data+'">'+locais_ativos[2].nome+'</button>'+
        '</div>'+
        '</section>'
    )
}

function inicio_do_jogo() {
    $('.content').html(
        '<section class="nes-container"><p>'+
        'Você acorda na sala de sua casa depois de uma festa de arromba. Vários amigos ainda estão por ai mas tudo que você quer é ver o Mingau, seu gato de estimação mas aparentemente ele sumiu. você encontra algém cambaleante e faz a única pergunta de valor nesta manhã:'+
        '</p>'+
        '<div class="containers">'+
        '</div>'+
        '<button class="nes-btn inicio">CARA, CADÊ MEU GATO??</button>'+
        '</div>'+
        '</section>'

    )
}

function pista_do_gato() {
    $('.content').html(
        '<section class="nes-container">'+
        '<div class="containers">'+
        '<h2 class=""big>Opa! Parece que ele passou mesmo por aqui... tem pelo pra todo lado!</h2>'+
        '</div>'+
        '</section>'
    )
}

function define_proximos_locais() {    

    let locais_errados = []

    let dois_errados_um_certo = []

    for (let i = 0; i < estes_locais.length; i++) {
        if (i !== pontuacao) {        
            if (i !== controle) {
                if (i !== (pontuacao+1)) {
                    locais_errados.push(estes_locais[i]);
                }
            }
        }
    }
    if (controle == pontuacao) {
        dois_errados_um_certo.push(estes_locais[controle+1])
    }
    else {
        dois_errados_um_certo.push(estes_locais[pontuacao])
    }
    console.log(locais_errados)

    for (let index = 0; index < 2; index++) {
        dois_errados_um_certo.push(locais_errados[index])              
    }

    console.log(dois_errados_um_certo)
    return shuffle_arr(dois_errados_um_certo)
}

// Como o jogo progride?
// Reconhecer 


//Apoio 
function shuffle_arr(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}