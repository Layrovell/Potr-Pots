'use strict';

const cartBtn = document.querySelector('.header__cart');
const openCart = document.querySelector('.shopping-cart');

cartBtn.onclick = function() {
  openCart.classList.toggle('shopping-cart--disabled');
  openCart.classList.toggle('shopping-cart--move');
};

const closeBtn = document.querySelector('.close-btn');

closeBtn.onclick = function() {
  openCart.classList.remove('shopping-cart--move');
  openCart.classList.add('shopping-cart--disabled');
};

const bg = document.querySelector('.benefits__parallax');

window.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
