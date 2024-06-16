const meusInputs = document.querySelectorAll(".input-contato");
const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    meusInputs.forEach((input) => {

        if (input.value) {
            input.classList.add("borda-verde");
            input.classList.remove("borda-vermelha");
            input.nextElementSibling.classList.remove("mostrar");

        } else {
            input.classList.remove("borda-verde");
            input.classList.add("borda-vermelha");

            input.nextElementSibling.classList.add("mostrar");
        }
    });
});


