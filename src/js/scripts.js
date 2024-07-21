(function() {
  console.log('Hello, world!');
  
  document.addEventListener('DOMContentLoaded', function() {
    var element = document.createElement('div');
    element.textContent = 'Elemento dinâmico!';
    document.body.appendChild(element);
  });
})();
