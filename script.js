const DOM = {
  TODOS_QUIZZES_UL: document.querySelector(".quizzes"),
  renderizarQuizzes(quizz) {
    this.limparQuizzes();
    quizz.forEach((quizz) => {
      this.TODOS_QUIZZES_UL.innerHTML += `<li class='_${quizz.id}'>
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
      .get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
      .catch((error) => console.log(error))
      .then((res) => DOM.renderizarQuizzes(res.data));
  },
};

App.getQuizzes();
