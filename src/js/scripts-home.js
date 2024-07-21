(function() {
  var button = document.createElement('button');
  button.textContent = 'Clique aqui!';
  document.body.appendChild(button);

  button.addEventListener('click', function() {
    alert('Clicado!!');
  });
})();
