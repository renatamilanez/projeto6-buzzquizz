function validarInfoQuiz() {
  let tituloQuizz = document.querySelector(".titulo-novo-quizz");
  let caracTitulo = tituloQuizz.value.toString().length;
  let url = document.querySelector(".url-novo-quizz");
  let urlQuizz = url.value.toString();
  let qtdadeQuizz = document.querySelector(".pergunta-novo-quizz");
  let niveisQuizz = document.querySelector(".niveis-novo-quizz");

  console.log(qtdadeQuizz);
  console.log(niveisQuizz);

  if (
    tituloQuizz.value !== "" &&
    tituloQuizz.value !== undefined &&
    caracTitulo >= 20 &&
    caracTitulo <= 60 &&
    ((urlQuizz !== "" && urlQuizz.includes("https")) ||
      urlQuizz.includes("http") ||
      urlQuizz.includes(".jpeg") ||
      urlQuizz.includes(".png") ||
      urlQuizz.includes("jpeg")) &&
    Number(qtdadeQuizz.value) >= 3 &&
    Number(niveisQuizz.value) >= 2
  ) {
    postNovoQuiz();
  } else {
    alert("Favor preencher os dados corretamente.");
  }
}

function postNovoQuiz() {
  console.log("ta passando");
  //aqui deve ser armazenado no local storage
}
