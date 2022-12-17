// window scroll navbar, sticky nacbar
const nav2 = document.querySelector('nav');
window.addEventListener('scroll', function () {
  this.scrollY > 20 ? nav2.classList.add('active') : nav2.classList.remove('active');
});

// navbar for mobile, drop doww
const menuBurger = document.querySelector('.menu-burger input');
const nav = document.querySelector('nav ul');

menuBurger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
