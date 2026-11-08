//Criação de uma timeline de um GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        

    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //NOMEANDO ENTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID laranja-cortada PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
); //SINCRONIZANDO COM A ANIMAÇÃO NOMEADA 'ORANGE'

tl.to(
    '#laranja',
    {
        width: '15%',//REDUZ A LARGURA DO ELEMENTO COM ID 'LARANJA' PARA 15%
        top: '160%', //MOVE O ELEMENTO PARA 160% DO TOP
        right: '10%', //MOVE O ELEMENTO PARA 10% DA DIREITA
    },
    'orange'
); //SINCRONIZANDO COM A ANIMAÇÃO NOMEADA 'LARANJA'

tl.to(
    '#folha',
    {
        top: '110%', // MOVE O ELEMENTO COM ID 'FOLHA' PARA 110% DO TOPO
        rotate: '530deg',//ROTACIONA O ELEMENTO EM 530 GRAUS
        left: '70%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); //SINCRONIZANDO COM A ANIMAÇÃO NOMEADA 'ORANGE'

tl.to(
    '#folha2',
    {
        top: '110%', // MOVE O ELEMENTO COM ID 'FOLHA' PARA 110% DO TOPO
        rotate: '530deg',//ROTACIONA O ELEMENTO EM 530 GRAUS
        left: '0%', //MOVE O ELEMENTO PARA 0% DA ESQUERDA
    },
    'orange'
); //SINCRONIZANDO COM A ANIMAÇÃO NOMEADA 'ORANGE'

//CRIANDO OUTRA TIMELINE
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //FIM DA ANIMAÇÃO (O TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SEÇÃO .THREE)
        scrub: true,
        

    },
});

//DEFININDO AS ANIMAÇÕES DOS ELEMENTOS QUANDO A TIMELINE TL2 ACONTECE
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',//INICIA O ELEMENTO DA COMA A CLASS 'LEMON1' ROTACIONANDO
        left: '-100%',//INICIA O ELEMENTO FORA DA TELA, À ESQUERDA (-100%)
        top: '110%',//INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA ('110%' DO TOPO)
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',//INICIA O ELEMENTO DA COMA A id 'COCACOLA' ROTACIONANDO
        left: '-100%',//INICIA O ELEMENTO FORA DA TELA, À ESQUERDA (-100%)
        top: '110%',//INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA ('110%' DO TOPO)
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',//INICIA O ELEMENTO DA COMA A CLASS 'LEMON2' ROTACIONANDO em 90 graus
        left: '100%',//INICIA O ELEMENTO FORA DA TELA, À direita (100%)
        top: '110%',//INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA ('110%' DO TOPO)
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',//INICIA O ELEMENTO DA COMA A id 'pepsi' ROTACIONANDO em 90 graus
        left: '100%',//INICIA O ELEMENTO FORA DA TELA, À direita (100%)
        top: '110%',//INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA ('110%' DO TOPO)
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',// AUMENTA A LARGURA DO ELEMENTO COM class 'LARANJA-CORTADA' PARA 18%
        left: '42%',//MOVE O ELEMENTO PARA 42% DA ESQUERDA
        top: '204%',//MOVE O ELEMENTO PARA 204% DO TOPO
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO

tl2.to(
    '#fanta',
    {
        width: '35%',// AUMENTA A LARGURA DO ELEMENTO COM class 'fanta' PARA 35%
        left: '33%',//MOVE O ELEMENTO PARA 33% DA ESQUERDA
        top: '213%',//MOVE O ELEMENTO PARA 210% DO TOPO
    },
    'ca'
);//NOMEANDO ESTE TRCHO DE ANIMAÇÃO COMO CA PARA SINCRONIZAÇÃO