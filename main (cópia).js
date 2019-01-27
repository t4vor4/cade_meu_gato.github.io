let lista_de_amigos = [
    {id: 'jorel', nome: 'Jorel'},
    {id: 'anette', nome: 'Anete'},
    {id: 'jorge', nome: 'Jorge'},
    {id: 'haoryas', nome: 'Haoryas'},
    {id: 'miguel', nome: 'Miguel'},
    {id: 'arthur', nome: 'Arthur'}
    {id: 'maria_eduarda', nome: 'Maria Eduarda'}
    {id: 'regina', nome: 'Regina'}
    {id: 'patricia', nome: 'Patricia'}
    {id: 'sanchez', nome: 'Sanchez'}
    {id: 'estranho', nome: 'Cara estranho'}
]

let estes_locais = [
    {data: 'sala', nome: 'Sala de Estar', descricao: 'Aparentemente ouve uma batalha campal aqui. Pessoas caidas gemem entre pesadelos e dores nas costas e esse cenário só é cortado pelo grupo de amigos que varou a noite tentando zerar um jogo obscuro para um video game já fora de linha.'},
    {data: 'cozinha', nome: 'Cozinha', descricao: 'Sua cozinha esta uma bagunça, com uma pilha de louça suja e no fundo da pia uma substância gelatinosa que pode ou não estar tentando entrar em contato com seu planeta natal. Alguns amigos parecem estar perdidos aqui. O que você gostaria de perguntar?'},
    {data: 'banheiro', nome: 'Banheiro', descricao: 'Seu banheiro parecia ter sido inspirado no que havia de mais chique nas revistas de design. Agora ele parece o que há de mais chique nas revistas de descarte de resíduos tóxicos. Tem algumas almas perdias ali disputando o que um dia foi um lindo vaso sanitário'},
    {data: 'quarto', nome: 'Quarto', descricao: 'Seu quarto sempre foi o lugar mais quente e aconchegante desta casa e, aparentemente, um grupo de amigos também concorda com você. Só não concordam se o melhor lugar para a soneca é o guarda-roupa ou o criado-mudo.'}
]

let amigo_responde = {
    nome: 'Jorel',
    texto: 'Acho que vi seu gato na cozinha'
}



$(document).ready(function(){
    //Inicio
    inicio_do_jogo();

    // perguntar para alguem
    $(document).on('click', '.inicio', function(event) {
        amigos_nesta_sala(lista_de_amigos, estes_locais[0])
    })

    // Quando vc escolhe um amigo para perguntar    
    $(document).on('click', '.perg_pers', function(event) {
        pessoa_responde(amigo_responde)
    })

    //Se for perguntar para mais amigos
    $(document).on('click', '.perguntar_alguem', function(event) {
        amigos_nesta_sala(lista_de_amigos,estes_locais[0])
    })

    $(document).on('click', '.locais_casa', function(event) {
        locais_da_casa(estes_locais)   
    })

    $(document).on('click', '.local', function(event) {
        amigos_nesta_sala(lista_de_amigos, estes_locais[0]) 
    })
    

})

function amigos_nesta_sala(lista_amigo, local_atual) {
    
    $('.content').html(
        '<section class="nes-container with-title">'+
        '<h2 class="title">Você esta em '+local_atual.nome+'</h2>'+
        '<p>'+local_atual.descricao+'</p>'+
        '<div class="containers">'+
        '<button class="nes-btn perg_pers perg_pers_1" data-amigo="'+lista_amigo[0].id+'">Perguntar para '+lista_amigo[0].nome+'</button>'+
        '<button class="nes-btn perg_pers perg_pers_2" data-amigo="'+lista_amigo[1].id+'">Perguntar para '+lista_amigo[1].nome+'</button>'+
        '<button class="nes-btn perg_pers perg_pers_3" data-amigo="'+lista_amigo[2].id+'">Perguntar para '+lista_amigo[2].nome+'</button>'+
        '</div>'+
        '</section>'
    )
}

function pessoa_responde(pessoa) {
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