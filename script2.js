let quizz = [];
let tituloQuizz = document.querySelector('.titulo-novo-quizz');
let urlInfo = document.querySelector('.url-novo-quizz');
let qtdadeQuizz = document.querySelector('.pergunta-novo-quizz');
let perguntaQuizz = document.querySelector('.texto-pergunta');
let corPergunta = document.querySelector('.cor-pergunta');
let respostaPergunta = document.querySelector('.resposta-pergunta');
let urlPergunta = document.querySelector('.url-pergunta');
let tituloNivel = document.querySelector('.titulo-nivel');
let porcentagemNivel = Number(document.querySelector('.porcentagem-nivel').value);
let urlNivel = document.querySelector('.url-nivel');
let descricaoNivel = document.querySelector('.descricao-nivel');

function renderizarInfoQuizz(){
    let telaInicial = document.querySelector('.tela-inicial');
    telaInicial.innerHTML = "";
    let telaJogar = document.querySelector('.tela-jogarQuizz')
    telaJogar.innerHTML = "";
    let telaQuizz = document.querySelector('.tela-quizz');
    telaQuizz.innerHTML = "";
    let renderizar = telaQuizz.innerHTML += `
    <div class="template-novo-quizz">
        <h5>Comece pelo começo</h5>
        <div class="container-quizz">
            <input class="titulo-novo-quizz" type="text" placeholder="Título do seu quizz" required minlength="20" maxlength="60">
            <input class="url-novo-quizz" type="url" required placeholder="URL da imagem do seu quizz">
            <input class="pergunta-novo-quizz" required type="number" placeholder="Quantidade de perguntas do seu quizz">
            <input class="niveis-novo-quizz" type="number" required placeholder="Quantidade de níveis do seu quizz">
        </div>
        <button onclick="validarInfoQuizz()">Prosseguir para criar perguntas</button>
    </div>`;
    
    return renderizar;
}

function validarInfoQuizz(){
    tituloQuizz = document.querySelector('.titulo-novo-quizz');
    let caracTitulo = ((tituloQuizz.value).toString()).length;
    urlInfo = document.querySelector('.url-novo-quizz');
    let urlQuizz = ((urlInfo.value).toString());
    qtdadeQuizz = document.querySelector('.pergunta-novo-quizz');
    let niveisQuizz = document.querySelector('.niveis-novo-quizz');

    if ((tituloQuizz.value !== "" && tituloQuizz.value !== undefined && caracTitulo >=20 && caracTitulo <=60) && (urlInfo.value !== "" && urlQuizz.includes('https') || urlQuizz.includes('http') || urlQuizz.includes('.jpeg') || urlQuizz.includes('.png') || urlQuizz.includes('jpeg')) && (Number(qtdadeQuizz.value)>=3) && (Number(niveisQuizz.value)>=2)){
        renderizarPerguntasQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function postarQuiz(){
    quizz = [{
        title: `${tituloQuizz.value}`,
        image: `${urlInfo.value}`,
        questions: []
    }]

    for (let i=0; i < qtdadeQuizz.value; i++){
        let qtdadeQuestions = {
        title: `${perguntaQuizz[i].value}`,
        color: `${corPergunta[i].value}`,
        answers: []}
    }

    let promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizz);
    promise.catch()
}

function renderizarPerguntasQuizz(){
    let telaQuizz = document.querySelector('.tela-quizz');
    telaQuizz.innerHTML = "";
    let renderizar =  telaQuizz.innerHTML += `          
    <div class="tela-perguntas-quizz">
        <div class="template-novo-quizz"> 
            <h5>Crie suas perguntas</h5>
            <div class="container-quizz">
                <div class="resposta correta">
                    <h6>Pergunta 1</h6>
                    <input class="texto-pergunta" type="text" placeholder="Texto da pergunta" required minlength="20">
                    <input class="cor-pergunta" type="color" required placeholder="Cor de fundo da pergunta" value="#f6b73c">
                    <h6>Resposta correta</h6>
                    <input class="resposta-pergunta" required type="text" placeholder="Resposta correta">
                    <input class="url-pergunta" type="url" required placeholder="URL da imagem">
                </div>
                <h6>Resposta incorretas</h6>
                <div class="resposta incorreta">
                    <input class="resposta-pergunta" required type="text" placeholder="Resposta incorreta 1">
                    <input class="url-pergunta" type="url" required placeholder="URL da imagem">
                </div>
            </div>

            <div class="expansivo">
                <h6>Pergunta 2</h6>
                <ion-icon name="create-outline" onclick="expandir()"></ion-icon>
            </div>

            <button onclick="validarPerguntasQuizz()">Prosseguir para criar níveis</button>
        </div>
    </div>`;

    return renderizar;
}

function validarPerguntasQuizz(){
    perguntaQuizz = document.querySelector('.texto-pergunta');
    let caracPergunta = ((perguntaQuizz.value).toString()).length;
    corPergunta = document.querySelector('.cor-pergunta');
    respostaPergunta = document.querySelector('.resposta-pergunta');
    urlPergunta = document.querySelector('.url-pergunta');
    let urlQuizz = ((urlPergunta.value).toString());

    if ((perguntaQuizz.value !== "" && caracPergunta >=20) && (corPergunta.value !== "") && (respostaPergunta.value !== "") &&  (urlPergunta.value !== "" && urlQuizz.includes('https') || urlQuizz.includes('http') || urlQuizz.includes('.jpeg') || urlQuizz.includes('.png') || urlQuizz.includes('jpeg'))){
        renderizarNiveisQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarNiveisQuizz(){
    let telaQuizz = document.querySelector('.tela-quizz');
    telaQuizz.innerHTML = "";
    let renderizar =  telaQuizz.innerHTML += `        
    <div class="tela-niveis-quizz">
        <div class="template-novo-quizz"> 
            <h5>Agora, decida os níveis!</h5>
            <div class="container-quizz">
                <div class="nivel-quizz">
                <h6>Nível 1</h6>
                <input class="titulo-nivel" type="text" placeholder="Título do nível" required minlength="10">
                <input class="porcentagem-nivel" type="number" required min="0" max="100" placeholder="% de acerto mínima">
                <input class="url-nivel" type="url" required placeholder="URL da imagem do nível">
                <input class="descricao-nivel" required type="text" placeholder="Descrição do nível" minlength="30">
                </div>
            </div>

            <div class="expansivo">
                <h6>Nível 2</h6>
                <ion-icon name="create-outline" onclick="expandir()"></ion-icon>
            </div>
            
            <button onclick="validarNiveisQuizz()">Prosseguir para criar níveis</button>
        </div>
    </div>`;

    return renderizar;
}

function validarNiveisQuizz(){
    tituloNivel = document.querySelector('.titulo-nivel');
    let caracTitulo = ((tituloNivel.value).toString()).length;
    porcentagemNivel = Number(document.querySelector('.porcentagem-nivel').value);
    urlNivel = document.querySelector('.url-nivel');
    let urlQuizz = ((urlNivel.value).toString());
    descricaoNivel = document.querySelector('.descricao-nivel');
    let caracDescricao = ((descricaoNivel.value).toString()).length;

    if ((tituloNivel !== "" && caracTitulo >=10) && (porcentagemNivel !== "" && porcentagemNivel >=0 && porcentagemNivel <= 100) &&  (urlNivel.value !== "" && urlQuizz.includes('https') || urlQuizz.includes('http') || urlQuizz.includes('.jpeg') || urlQuizz.includes('.png') || urlQuizz.includes('jpeg')) && (descricaoNivel !== "" && caracDescricao >= 30)){
        renderizarSucessoQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarSucessoQuizz() {
    let telaQuizz = document.querySelector('.tela-quizz');
    telaQuizz.innerHTML = "";
    let renderizar =  telaQuizz.innerHTML += `
    <div class="tela-sucesso-quizz"> 
        <div class="template-novo-quizz">
            <h5>Seu quizz está pronto!</h5>

            <img src="">
        
            <button onclick="renderizarQuizz()">Acessar Quizz</button>
            <a onclick="renderizarHome()">Voltar para home</a>
        </div>
    </div>
    `;
    return renderizar;
}

function renderizarQuizz() {
}

function renderizarHome() {

}

function postNovoQuizz(){
//aqui deve ser armazenado no local storage
}

function expandir(){

}

//ADICIONAR OPÇÕES DE RESPOSTAS INCORRETAS COM EXPANDE
//definir cada item da resposta como um parametro de objeto e colocar numa função for para cada parametro ser um [i]
//criar quantidade de perguntas de acordo com a quantidade que foi inserida nas informações


