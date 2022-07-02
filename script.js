const DOM = {
  TODOS_QUIZZES_UL: document.querySelector(".quizzes"),
  quizzesGerados: "",
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
  },
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
  },
};

App.getQuizzes();

const telas = {
  TELA_INICIAL: document.querySelector(".tela-inicial"),
  TELA_CRIAR_QUIZZ: document.querySelector(".tela-quizz"),
  TELA_JOGAR_QUIZZ: document.querySelector(".tela-jogarQuizz"),
  UL_QUIZZES_PRA_JOGAR: document.querySelector(".quizzesPraJogar"),
};

function irCriarQuizz() {
  telas.TELA_INICIAL.classList.add("escondido");
  telas.TELA_CRIAR_QUIZZ.classList.remove("escondido");
}

function telaJogarQuizz(elemento) {
  telas.TELA_INICIAL.classList.add("escondido");
  telas.TELA_JOGAR_QUIZZ.classList.remove("escondido");
  renderizarQuizz(elemento);
}

function renderizarQuizz(elemento) {
  const id = elemento.className.slice(1);
  const UL_ALTERNATIVAS = document.querySelector("._quizzAlternativas");

  // UL_ALTERNATIVAS.innerHTML += `<li>
  //                                 <img src= />
  //                                 <p></p>
  //                               </li>`;
  // UL_ALTERNATIVAS.innerHTML = "";
  console.log(id);
  //   const LI_TEMPLATE = `<li class="_quizz">
  //   <div>
  //     <p class="_quizzTitulo">
  //       ${TITULO}
  //     </p>
  //   </div>
  //   <ul class="_quizzAlternativas">
  //     <li>
  //       <img
  //         src="${ALTERNATIVA_1}"
  //       />
  //       <p>${TITULO_1}</p>
  //     </li>
  //     <li>
  //       <img
  //         src="${ALTERNATIVA_2}"
  //       />
  //       <p>${TITULO_2}</p>
  //     </li>
  //     <li>
  //       <img
  //         src="${ALTERNATIVA_3}"
  //       />
  //       <p>${TITULO_3}</p>
  //     </li>
  //     <li>
  //       <img
  //         src="${ALTERNATIVA_4}"
  //       />
  //       <p>${TITULO_4}</p>
  //     </li>
  //   </ul>
  // </li>`;
  axios
    .get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${id}`)
    .catch((error) => console.log(error))
    .then((res) => {
      console.log(res.data);
    });
}
