document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector('.container');
  let items = container.querySelectorAll('.list .item');
  let indicadores = document.querySelector('.indicadores');
  let dots = indicadores.querySelectorAll('ul li');

  let active = 0;

  function setSlider() {

    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('ativo'));

    items[active].classList.add('active');
    dots[active].classList.add('ativo');
  }

  setSlider();
  let verMaisButtons = container.querySelectorAll('.ver-mais');
  verMaisButtons.forEach(button => {
    button.addEventListener('click', () => {
      active = (active + 1) % items.length;
      setSlider();
    });
  });
});
