let quizz = {
    title: "",
    image: "",
    questions: [],
    levels: []
};

let tituloQuizz = document.querySelector('.titulo-novo-quizz');
let urlInfo = document.querySelector('.url-novo-quizz');
let qtdadeQuizz = document.querySelector('.pergunta-novo-quizz');
let perguntaQuizz = document.querySelector('.texto-pergunta');
let corPergunta = document.querySelector('.cor-pergunta');
let respostaPergunta = document.querySelector('.resposta-pergunta');
let urlPergunta = document.querySelector('.url-pergunta');
let tituloNivel = document.querySelector('.titulo-nivel');
let porcentagemNivel = document.querySelector('.porcentagem-nivel');
let urlNivel = document.querySelector('.url-nivel');
let descricaoNivel = document.querySelector('.descricao-nivel');
var niveisQuizz = document.querySelector('.niveis-novo-quizz');

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
        <div class="main-container">
        <div class="container-quizz">
            <input class="titulo-novo-quizz" type="text" placeholder="Título do seu quizz" required minlength="20" maxlength="65">
            <input class="url-novo-quizz" type="url" required placeholder="URL da imagem do seu quizz">
            <input class="pergunta-novo-quizz" required type="number" placeholder="Quantidade de perguntas do seu quizz">
            <input class="niveis-novo-quizz" type="number" required placeholder="Quantidade de níveis do seu quizz">
        </div>
        </div>
        <button onclick="validarInfoQuizz();">Prosseguir para criar perguntas</button>
    </div>`;

    return renderizar;
}

function validarInfoQuizz(){
    tituloQuizz = document.querySelector('.titulo-novo-quizz');
    let caracTitulo = ((tituloQuizz.value).toString()).length;
    urlInfo = document.querySelector('.url-novo-quizz');
    let urlQuizz = ((urlInfo.value).toString());
    qtdadeQuizz = document.querySelector('.pergunta-novo-quizz');
    niveisQuizz = document.querySelector('.niveis-novo-quizz');

    if ((tituloQuizz.value !== "" && tituloQuizz.value !== undefined && caracTitulo >=20 && caracTitulo <=65) && (urlInfo.value !== "" && urlQuizz.includes('https') || urlQuizz.includes('http') || urlQuizz.includes('.jpeg') || urlQuizz.includes('.png') || urlQuizz.includes('jpeg')) && (Number(qtdadeQuizz.value)>=3) && (Number(niveisQuizz.value)>=2)){
        quizz.title = tituloQuizz.value;
        quizz.image = urlInfo.value;
        renderizarPerguntasQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function renderizarPerguntasQuizz(){
    let telaQuizz = document.querySelector('.main-container');
    telaQuizz.innerHTML = "";

    for(let i=1; i <= (qtdadeQuizz.value); i++){
        telaQuizz.innerHTML += `
        <div class="container-quizz">
        <div class="resposta correta">
        <h6>Pergunta ${[i]}</h6>
        <input class="texto-pergunta ${[i]}" type="text" placeholder="Texto da pergunta" required minlength="20">
        <input class="cor-pergunta ${[i]}" type="color" required placeholder="Cor de fundo da pergunta ${[i]}" value="#f6b73c">
        <h6>Resposta correta</h6>
        <input class="resposta-pergunta-1 ${[i]}" required type="text" placeholder="Resposta correta">
        <input class="url-pergunta-1 ${[i]}" type="url" required placeholder="URL da imagem">
        </div>
            <h6>Resposta incorretas</h6>
            <div class="resposta incorreta">
                <input class="resposta-pergunta-2 ${[i]}" required type="text" placeholder="Resposta incorreta 1">
                <input class="url-pergunta-2 ${[i]}" type="url" required placeholder="URL da imagem 1">
            </div>
            <div class="resposta incorreta">
                <input class="resposta-pergunta-3 ${[i]}" type="text" placeholder="Resposta incorreta 2">
                <input class="url-pergunta-3 ${[i]}" type="url" placeholder="URL da imagem 2">
            </div>
            <div class="resposta incorreta">
                <input class="resposta-pergunta-4 ${[i]}" type="text" placeholder="Resposta incorreta 3">
                <input class="url-pergunta-4 ${[i]}" type="url" placeholder="URL da imagem 3">
            </div>
        </div>
        </div>`
    }

    let botao = document.querySelector('.tela-quizz button');
    botao.innerHTML = "Prosseguir para criar níveis";
    botao.onclick=validarPerguntasQuizz;
    let titulo = document.querySelector('h5');
    titulo.innerHTML = "Crie suas perguntas"

    return telaQuizz;
}

function validarPerguntasQuizz(){
    perguntaQuizz = document.querySelector('.texto-pergunta');
    let caracPergunta = ((perguntaQuizz.value).toString()).length;
    corPergunta = document.querySelector('.cor-pergunta');
    let resposta1 = document.querySelector('.resposta-pergunta-1');
    let url1 = document.querySelector('.url-pergunta-1');
    let urlQuizz1 = ((url1.value).toString());
    let resposta2 = document.querySelector('.resposta-pergunta-2');
    let url2 = document.querySelector('.url-pergunta-2');
    let urlQuizz2 = ((url2.value).toString());

    if ((perguntaQuizz.value !== "" 
    && caracPergunta >=20) 
    && (corPergunta.value !== "") 
    && (resposta1.value !== "" 
    && resposta2.value !== "") 
    && (url1.value !== ""
    && urlQuizz1.includes('https') 
    || urlQuizz1.includes('http') 
    || urlQuizz1.includes('.jpeg') 
    || urlQuizz1.includes('.png') 
    || urlQuizz.includes('jpg'))
    && (url2.value !== "" 
    && urlQuizz2.includes('https') 
    || urlQuizz2.includes('http') 
    || urlQuizz2.includes('.jpeg') 
    || urlQuizz2.includes('.png') 
    || urlQuizz2.includes('jpg'))
    ){
        salvarPerguntasArray();
        renderizarNiveisQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function salvarPerguntasArray(){

    for(let i=1; i <= (qtdadeQuizz.value); i++){
        let resposta1 = document.getElementsByClassName(`resposta-pergunta-1 ${[i]}`)[0];
        let url1 = document.getElementsByClassName(`url-pergunta-1 ${[i]}`)[0];
        let resposta2 = document.getElementsByClassName(`resposta-pergunta-2 ${[i]}`)[0];
        let url2 = document.getElementsByClassName(`url-pergunta-2 ${[i]}`)[0];
        let resposta3 = document.getElementsByClassName(`resposta-pergunta-3 ${[i]}`)[0];
        let url3 = document.getElementsByClassName(`url-pergunta-3 ${[i]}`)[0];
        let resposta4 = document.getElementsByClassName(`resposta-pergunta-4 ${[i]}`)[0];
        let url4 = document.getElementsByClassName(`url-pergunta-4 ${[i]}`)[0];
        let tituloPergunta = document.getElementsByClassName(`texto-pergunta ${[i]}`)[0];

        const infoApi = {
                title: `${tituloPergunta.value}`,
                color: `${corPergunta.value}`,
                answers: [
                    {
                        text: `${resposta1.value}`,
                        image: `${url1.value}`,
                        isCorrectAnswer: true
                    },
                    {
                        text: `${resposta2.value}`,
                        image: `${url2.value}`,
                        isCorrectAnswer: false
                    },
                    {
                        text: `${resposta3.value}`,
                        image: `${url3.value}`,
                        isCorrectAnswer: false
                    },
                    {
                        text: `${resposta4.value}`,
                        image: `${url4.value}`,
                        isCorrectAnswer: false
                    },
                ]
        }
        quizz.questions.push(infoApi);
    }
    console.log(quizz);
}

function renderizarNiveisQuizz(){
    let telaQuizz = document.querySelector('.main-container');
    telaQuizz.innerHTML = "";

    console.log(niveisQuizz.value);

    for(let i=1; i <= (niveisQuizz.value); i++){
        telaQuizz.innerHTML +=`
        <div class="container-quizz">
        <div class="nivel-quizz">
        <h6>Nível ${[i]}</h6>
        <input class="titulo-nivel" type="text" placeholder="Título do nível ${[i]}" required minlength="10">
        <input class="porcentagem-nivel" type="number" required min="0" max="100" placeholder="% de acerto mínima">
        <input class="url-nivel" type="url" required placeholder="URL da imagem do nível ${[i]}">
        <input class="descricao-nivel" required type="text" placeholder="Descrição do nível ${[i]}" minlength="30">
        </div>
        </div>`
    }

    let botao = document.querySelector('.tela-quizz button');
    botao.innerHTML = "Finalizar quizz";
    botao.onclick=validarNiveisQuizz;
    let titulo = document.querySelector('h5');
    titulo.innerHTML = "Agora, decida os níveis"

    return telaQuizz;

}

function validarNiveisQuizz(){
    tituloNivel = document.querySelector('.titulo-nivel');
    let caracTitulo = ((tituloNivel.value).toString()).length;
    porcentagemNivel = document.querySelector('.porcentagem-nivel');
    urlNivel = document.querySelector('.url-nivel');
    let urlQuizz = ((urlNivel.value).toString());
    descricaoNivel = document.querySelector('.descricao-nivel');
    let caracDescricao = ((descricaoNivel.value).toString()).length;

    console.log(porcentagemNivel.value);

    if ((tituloNivel !== "" 
    && caracTitulo >=10) 
    && (porcentagemNivel.value !== "" 
    && porcentagemNivel.value >=0 
    && porcentagemNivel.value <= 100 
    && verificarNivelZero()) 
    &&  (urlNivel.value !== "" 
    && urlQuizz.includes('https') 
    || urlQuizz.includes('http') 
    || urlQuizz.includes('.jpeg') 
    || urlQuizz.includes('.png') 
    || urlQuizz.includes('jpeg')) 
    && (descricaoNivel !== "" 
    && caracDescricao >= 30)){
        salvarNiveisQuizz();
    } else {
        alert('Favor preencher os dados corretamente.')
    }
}

function verificarNivelZero(){
    let valido = false;
    for(let i=1; i <= (niveisQuizz.value); i++){
        console.log(porcentagemNivel.value)
        if(porcentagemNivel.value == 0){
            valido = true;
        }
}
    return valido;
}

let listaId = [];
async function salvarNiveisQuizz(){
    for(let j=1; j <= (qtdadeQuizz.value); j++){
        const infoApi = {   
                        title: `${tituloNivel.value}`,
                        image: `${urlNivel.value}`,
                        text: `${descricaoNivel.value}`,
                        minValue: `${porcentagemNivel.value}`
                    };
        quizz.levels.push(infoApi);
    }
    console.log(quizz);
    /*let promise = await axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/', quizz)
    promise.catch(erroAPI);
    promise.then(enviarLocalStorage)*/


    try {
        let promise = await axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/', quizz)
        let id = promise.data.id;
        listaId.push(id);
        let listaIdString = JSON.stringify(listaId);
        localStorage.setItem("lista de ids", listaIdString);
        renderizarSucessoQuizz();
    } catch (error) {
        erroAPI();
    }
}
//promise.data.id === localStorage.getItem('id')
/*function enviarLocalStorage(){
    let id = promise.data.id;
    let listaId = [];
    listaId.push(id);
    listaIdString = JSON.stringify(listaId);
    localStorage.setItem("lista de id", listaIdString);
    renderizarSucessoQuizz();
}*/

function erroAPI(){
    console.log('não enviou')
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
            <a onclick="telaHome()">Voltar para home</a>
        </div>
    </div>
    `;
    return renderizar;
}

function expandir(){
}

//colocar imagem na finalização do quizz
//fazer abas expansivas