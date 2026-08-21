const campos = document.querySelectorAll(".form-control");

const cep = document.querySelector('[aria-label="CEP"]');
const rua = document.querySelector('[aria-label="Rua"]');
const bairro = document.querySelector('[aria-label="Bairro"]');
const cidade = document.querySelector('[aria-label="Cidade"]');
const estado = document.querySelector('[aria-label="Estado"]');
const ibge = document.querySelector('[aria-label="IBGE"]');

const formulario = document.querySelector("form");

cep.addEventListener("keyup", function (event) {

    let valorCep = cep.value.replace(/\D/g, "");

    if (valorCep.length === 8) {

        fetch(`https://viacep.com.br/ws/${valorCep}/json/`)

            .then(response => response.json())

            .then(data => {

                if (data.erro) {

                    alert("CEP não encontrado!");

                    return;
                }

                rua.value = data.logradouro;
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                estado.value = data.uf;
                ibge.value = data.ibge;

            });

    }

});


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Formulário enviado!");

});