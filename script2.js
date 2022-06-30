function renderizarPerguntasQuiz(){

}

function validarInfoQuiz(){
    let tituloQuizz = document.querySelector('.titulo-novo-quizz');
    let caracTitulo = ((tituloQuizz.value).toString()).length;
    let url = document.querySelector('.url-novo-quizz');
    let urlQuizz = ((url.value).toString());
    let qtdadeQuizz = document.querySelector('.pergunta-novo-quizz');
    let niveisQuizz = document.querySelector('.niveis-novo-quizz');

    if ((tituloQuizz.value !== "" && tituloQuizz.value !== undefined && caracTitulo >=20 && caracTitulo <=60) && (urlQuizz.includes('https') || urlQuizz.includes('http') || urlQuizz.includes('.jpeg') || urlQuizz.includes('.png') || urlQuizz.includes('jpeg')) && (Number(qtdadeQuizz.value)>=3) && (Number(niveisQuizz.value)>=2)){
        renderizarPerguntasQuizz(); 
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarPerguntasQuizz(){
    console.log('ta passando');
}

function validarPerguntasQuizz(){
    let perguntaQuizz = document.querySelector('.texto-pergunta');
    let caracPergunta = ((perguntaQuizz.value).toString()).length;
    let corPergunta = document.querySelector('.cor-pergunta');
    let respostaPergunta = document.querySelector('.resposta-pergunta');
    let url = document.querySelector('.url-pergunta');
    let urlPergunta = ((url.value).toString());

    if ((perguntaQuizz.value !== "" && caracPergunta >=20) && (corPergunta.value !== "") && (respostaPergunta.value !== "") &&  (urlPergunta.includes('https') || urlPergunta.includes('http') || urlPergunta.includes('.jpeg') || urlPergunta.includes('.png') || urlPergunta.includes('jpeg'))){
        renderizarNiveisQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarNiveisQuizz(){
    console.log('Hora de renderizar os níveis');
}

function validarNiveisQuizz(){
    let tituloNivel = document.querySelector('.titulo-nivel');
    let caracTitulo = ((tituloNivel.value).toString()).length;
    let porcentagemNivel = Number(document.querySelector('.porcentagem-nivel').value);
    let url = document.querySelector('.url-nivel');
    let urlNivel = ((url.value).toString());
    let descricaoNivel = document.querySelector('.descricao-nivel');
    let caracDescricao = ((descricaoNivel.value).toString()).length;

    if ((tituloNivel !== "" && caracTitulo >=10) && (porcentagemNivel !== "" && porcentagemNivel >=0 && porcentagemNivel <= 100) &&  (urlNivel.includes('https') || urlNivel.includes('http') || urlNivel.includes('.jpeg') || urlNivel.includes('.png') || urlNivel.includes('jpeg')) && (descricaoNivel !== "" && caracDescricao >= 30)){
        renderizarSucessoQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarSucessoQuizz() {
    console.log('Seu quizz foi criado com sucesso')
}

function renderizarQuizz() {

}

function renderizarHome() {
    
}

function postNovoQuizz(){
//aqui deve ser armazenado no local storage
}

function expandir(){
    console.log('aqui tem que expandir');
}

//ADICIONAR OPÇÕES DE RESPOSTAS INCORRETAS COM EXPANDE
//definir cada item da resposta como um parametro de objeto e colocar numa função for para cada parametro ser um [i]
//fazer funções de renderizar as páginas
//criar quantidade de perguntas de acordo com a quantidade que foi inserida nas informações