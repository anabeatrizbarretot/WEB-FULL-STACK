let nomeAluno;
let notas = [];

let formulario = document.getElementById("formulario");

let nome = document.getElementById("nome");

let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let nota4 = document.getElementById("nota4");

let media = document.getElementById("media");
let resultado = document.getElementById("resultado");


function calcularMedia() {

    if (nota1.value !== "" && nota2.value !== "" &&
        nota3.value !== "" && nota4.value !== "") {

        notas = [
            Number(nota1.value),
            Number(nota2.value),
            Number(nota3.value),
            Number(nota4.value)
        ];

        let soma = 0;

        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        let mediaFinal = soma / notas.length;

        media.textContent = mediaFinal.toFixed(2);

        return mediaFinal;

    } else {

        media.textContent = "-";

        return null;
    }
}


nota1.addEventListener("input", calcularMedia);
nota2.addEventListener("input", calcularMedia);
nota3.addEventListener("input", calcularMedia);
nota4.addEventListener("input", calcularMedia);


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    nomeAluno = nome.value;

    let mediaFinal = calcularMedia();

    if (nomeAluno === "") {
        alert("Digite o nome do aluno.");
        return;
    }

    if (mediaFinal === null) {
        alert("Preencha todas as notas.");
        return;
    }


    if (mediaFinal >= 6) {

        resultado.textContent = "APROVADO";

    } else if (mediaFinal >= 2 && mediaFinal <= 5.9) {

        resultado.textContent = "EXAME";

    } else {

        resultado.textContent = "REPROVADO";
    }

});

