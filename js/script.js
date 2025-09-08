

document.addEventListener('click', documentActions)

function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest('.menu__icon')) {
    document.documentElement.classList.toggle('menu-open')
  }
}