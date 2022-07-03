// ...

const DOM = {
  TODOS_QUIZZES_UL: document.querySelector(".quizzes"),
  quizzesGerados: "",
  data: "",
  RESPOSTAS: [],
  QUESTOES: 0,
  elemento: "",
  renderizarQuizzes(quizz) {
    this.limparQuizzes();
    quizz.forEach((quizz) => {
        this.TODOS_QUIZZES_UL.innerHTML += `<li class='_${quizz.id}' onclick='telaJogarQuizz(this)'>
                                        <div class='gradiente'>
                                          <div>
                                            <p>
                                                ${quizz.title}
                                            </p>
                                          </div>
                                        </div>
                                      </li>`;
        let quizz_classe = document.querySelector(`li._${quizz.id}`);
        quizz_classe.style.cssText = `
    background-image: url(${quizz.image});`;
      });
  },
  limparQuizzes() {
      this.TODOS_QUIZZES_UL.innerHTML = "";
  }
};

const App = {
  getQuizzes() {
    axios
        .get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes")
        .catch((error) => console.log(error))
        .then((res) => {
            DOM.renderizarQuizzes(res.data);
            DOM.quizzesGerados = res.data;
        });
  }
};

App.getQuizzes();

const telas = {
  TELA_INICIAL: document.querySelector(".tela-inicial"),
  TELA_CRIAR_QUIZZ: document.querySelector(".tela-quizz"),
  TELA_JOGAR_QUIZZ: document.querySelector(".tela-jogarQuizz")
};

function telaHome() {
  window.scrollTo(0, 0);
  document.location.reload(true);
}

function irCriarQuizz() {
  telas.TELA_INICIAL.classList.add("escondido");
  telas.TELA_CRIAR_QUIZZ.classList.remove("escondido");
}

function telaJogarQuizz(elemento) {
  telas.TELA_INICIAL.classList.add("escondido");
  telas.TELA_JOGAR_QUIZZ.classList.remove("escondido");
  DOM.elemento = elemento;
  renderizarQuizz();
}

function renderizarQuizz() {
  window.scrollTo(0, 0);
  document.querySelector(".quizzesPraJogar").innerHTML = "";
  DOM.QUESTOES = 0;
  DOM.RESPOSTAS = [];
  const id = DOM.elemento.className.slice(1);
  const UL_QUIZZES_PRA_JOGAR = document.querySelector(".quizzesPraJogar");
  const UL_ALTERNATIVAS = document.querySelector("._quizzAlternativas");
  const bannerImage = document.querySelector(".bannerImage");
  const bannerTitulo = document.querySelector(".bannerTitulo");

  axios
      .get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${id}`)
      .catch((error) => console.log(error))
      .then((res) => {
          console.log(res.data.questions);
          const questions = res.data.questions;
          DOM.QUESTOES = questions.length;
          DOM.data = res.data;
          console.log(DOM.data);
          bannerImage.src = res.data.image;
          bannerTitulo.innerHTML = res.data.title;
          questions.forEach((question) => {
              question.answers.sort(() => Math.random() - 0.5);
              if (question.answers.length === 2) {
                  UL_QUIZZES_PRA_JOGAR.innerHTML += `<li class="_quizz">
        <div style='background-color: ${question.color}'>
          <p class="_quizzTitulo">
            ${question.title}
          </p>
        </div>
        <ul class="_quizzAlternativas">
          <li class="${question.answers[0].isCorrectAnswer}" onclick="verificaResposta(this)">
            <img
              src="${question.answers[0].image}"
            />
            <p>${question.answers[0].text}</p>
          </li>
          <li class="${question.answers[1].isCorrectAnswer}" onclick="verificaResposta(this)">
            <img
              src="${question.answers[1].image}"
            />
            <p>${question.answers[1].text}</p>
          </li>
        </ul>`;
              }
              if (question.answers.length === 3) {
                  UL_QUIZZES_PRA_JOGAR.innerHTML += `<li class="_quizz">
      <div style='background-color: ${question.color}'>
        <p class="_quizzTitulo">
          ${question.title}
        </p>
      </div>
      <ul class="_quizzAlternativas">
        <li class="${question.answers[0].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[0].image}"
          />
          <p>${question.answers[0].text}</p>
        </li>
        <li class="${question.answers[1].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[1].image}"
          />
          <p>${question.answers[1].text}</p>
        </li>
        <li class="${question.answers[2].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[2].image}"
          />
          <p>${question.answers[2].text}</p>
        </li>
      </ul>`;
              }
              if (question.answers.length === 4) {
                  UL_QUIZZES_PRA_JOGAR.innerHTML += `<li class="_quizz">
      <div style='background-color: ${question.color}'>
        <p class="_quizzTitulo">
          ${question.title}
        </p>
      </div>
      <ul class="_quizzAlternativas">
        <li class="${question.answers[0].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[0].image}"
          />
          <p>${question.answers[0].text}</p>
        </li>
        <li class="${question.answers[1].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[1].image}"
          />
          <p>${question.answers[1].text}</p>
        </li>
        <li class="${question.answers[2].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[2].image}"
          />
          <p>${question.answers[2].text}</p>
        </li>
        <li class="${question.answers[3].isCorrectAnswer}" onclick="verificaResposta(this)">
          <img
            src="${question.answers[3].image}"
          />
          <p>${question.answers[3].text}</p>
        </li>
      </ul>`;
              }
          });
      });
}

function verificaResposta(elemento) {
  if (!elemento.parentNode.className.includes("finalizado")) {
      setTimeout(() => {
          let viewport = window.innerWidth;
          if (viewport >= 1100) {
              window.scrollBy(0, 700);
          } else {
              window.scrollBy(0, 500);
          }
      }, 2000);
      const trueOrFalse = elemento.className;
      const finalizado = document.querySelectorAll(".finalizado");
      const pai = elemento.parentNode;
      const el = pai.querySelectorAll(".false");
      let acertos = 0;
      let resultadoFinal = 0;
      for (let i = 0; i < el.length; i++) {
          el[i].style.cssText = "color: red; opacity: 0.4";
      }
      pai.querySelector("li.true").style.cssText =
          "color: green; opacity: 0.4";
      elemento.style.cssText = `color: ${
          trueOrFalse === "true" ? "green" : "red"
      }; opacity: 1`;
      pai.className += " finalizado";
      DOM.RESPOSTAS.push(trueOrFalse);
      if (DOM.QUESTOES === DOM.RESPOSTAS.length) {
          console.log("FINALIZADO!");
          DOM.RESPOSTAS.forEach((value) => {
              if (value === "true") {
                  acertos++;
              }
          });
          resultadoFinal = Math.round((acertos / DOM.QUESTOES) * 100);
          const niveis = [];
          DOM.data.levels.forEach((value) => niveis.push(value["minValue"]));
          let nivelFinal = closest(resultadoFinal, niveis);
          let nivelObj = "";
          DOM.data.levels.forEach((value) => {
              if (nivelFinal === value["minValue"]) {
                  nivelObj = value;
              }
          });
          console.log(nivelFinal);
          let quizzesUL = document.querySelector(".quizzesPraJogar");
          let resultado = `<li class="_resultado">
                      <div class="_pontuacao">
                        <p>${resultadoFinal}% de acerto: ${nivelObj["title"]}</p>
                      </div>
                      <div class="_pontuacao2">
                        <img
                          src="${nivelObj["image"]}"
                        />
                        <p>
                          ${nivelObj["text"]}
                        </p>
                      </div>
                      <div class="_reiniciarQuizz">
                        <button class="_reiniciar" onclick='renderizarQuizz()'>Reiniciar Quizz</button>
                        <button class="_home" onclick='telaHome()'>Voltar pra home</button>
                      </div>
                    </li>`;
          quizzesUL.innerHTML += resultado;
      }
  }
}

function closest(num, arr) {
  let novoArr = [];
  arr.forEach((value) => {
      if (!novoArr.includes(value)) {
          novoArr.push(value);
      }
  });
  novoArr = novoArr.sort((a, b) => a - b);
  let final = 0;
  novoArr.forEach((value) => {
      if (num >= value) {
          final = value;
      }
  });
  return final;
}
