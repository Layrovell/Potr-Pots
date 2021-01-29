'use strict';

const bg = document.querySelector('.benefits__parallax');

window.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
