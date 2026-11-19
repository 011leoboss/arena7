// Validação do formulário do ARENA777.
const formulario = document.querySelector("#formularioContato");
const mensagemSucesso = document.querySelector("#mensagemSucesso");

if (formulario) {
  // Verifica os campos quando o usuário tenta enviar.
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    formulario.classList.add("was-validated");
    mensagemSucesso.classList.add("d-none");

    if (formulario.checkValidity()) {
      // Limpa os campos e mostra a confirmação.
      formulario.reset();
      formulario.classList.remove("was-validated");
      mensagemSucesso.classList.remove("d-none");
    }
  });

  // Esconde a confirmação quando o usuário limpa o formulário.
  formulario.addEventListener("reset", function () {
    mensagemSucesso.classList.add("d-none");
    formulario.classList.remove("was-validated");
  });
}
