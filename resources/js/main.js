document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;
  var message = document.getElementById('message');

  if (campoB > campoA) {
      message.textContent = "Formulário válido.";
      message.classList.remove("error");
      message.classList.add("success");
      message.classList.remove("hide");
  } else {
      message.textContent = "Formulário inválido. Verifique se o 2º Número é maior que o 1º Número.";
      message.classList.remove("success");
      message.classList.add("error");
      message.classList.remove("hide");
  }
});

document.getElementById('campoA').addEventListener('keyup', function(e) {
  updateHints()
})
document.getElementById('campoA').addEventListener('focus', function(e) {
  updateHints()
})
document.getElementById('campoB').addEventListener('keyup', function(e) {
  updateHints()
})
document.getElementById('campoB').addEventListener('focus', function(e) {
  updateHints()
})

function updateHints() {
  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;
  var hintA = document.getElementById('hintCampoA');
  var hintB = document.getElementById('hintCampoB');

  if(!campoB) {
    hintA.style.color = "black";
    hintB.style.color = "black";
    return
  }

  if(campoB <= campoA ) {
    hintA.style.color = "red";
    hintB.style.color = "red";
  }
  else {
    hintA.style.color = "black";
    hintB.style.color = "black";
  }
}