console.log('Script loaded!');

const navigationMenu = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navigationMenu.classList.add('scrolled');
  } else {
    navigationMenu.classList.remove('scrolled');
  }
});
