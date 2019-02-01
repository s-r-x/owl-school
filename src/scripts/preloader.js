const $preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  console.log('load');
  $preloader.classList.add('loaded');
  setTimeout(() => $preloader.style.display = 'none', 300);

});
