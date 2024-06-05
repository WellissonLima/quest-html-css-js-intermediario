const meusInputs = document.querySelectorAll(".input-contato");
const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function () {
    meusInputs.forEach(meuInput => {
        let mensagemDeErro = meuInput.nextElementSibling;

        if (meuInput.value !== "") {
            meuInput.classList.add("borda-verde");
            meuInput.classList.remove("borda-vermelha");

            if (mensagemDeErro && mensagemDeErro.classList.contains('msg-erro')) {
                mensagemDeErro.remove();
            }
        } else {
            meuInput.classList.add("borda-vermelha");
            meuInput.classList.remove("borda-verde");

            if (!mensagemDeErro || !mensagemDeErro.classList.contains('msg-erro')) {
                const span = document.createElement('span');
                span.classList.add('msg-erro');
                span.style.color ='#f52e2e';
                span.style.fontSize = '8px'
                span.textContent = 'campo obrigatório';

                meuInput.parentNode.insertBefore(span, meuInput.nextElementSibling);
            }
        }
    });

})


