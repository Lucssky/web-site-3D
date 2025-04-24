document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector('.container');
  let items = container.querySelectorAll('.list .item');
  let indicadores = document.querySelector('.indicadores');
  let dots = indicadores.querySelectorAll('ul li');

  let active = 0;

  function setSlider() {
    // Remove o item e indicador ativos anteriores
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('ativo'));

    // Adiciona a classe no item e no dot ativo
    items[active].classList.add('active');
    dots[active].classList.add('ativo');
  }

  // Inicializa
  setSlider();

  // Adiciona evento de clique a todos os botões "Ver mais"
  let verMaisButtons = container.querySelectorAll('.ver-mais');
  verMaisButtons.forEach(button => {
    button.addEventListener('click', () => {
      active = (active + 1) % items.length;
      setSlider();
    });
  });
});
