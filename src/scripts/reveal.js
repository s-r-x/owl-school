import Reveal from 'scrollreveal';

function isMobile(agent = navigator.userAgent) {
  return /Android|iPhone|iPad|iPod/i.test(agent)
}
const qsa = document.querySelectorAll.bind(document);

function run() {
  window.addEventListener('load', () => {
    const $images = qsa('picture img');
    const $teachers = qsa('.teacher-item');
    const $hero = qsa('.hero');
    const $about = qsa('.about-section .section-text-part');
    const $numbers = qsa('.numbers-section .section-text-part');
    const $teachersSect = qsa('.teachers-section .section-text-part');
    const $process = qsa('.process-section .section-text-part');
    const $reviews = qsa('.reviews-section .section-text-part');
    const imagesConfig = {
      easing: 'ease-in-out',
      viewFactor: 0.3,
      duration: 1500,
    };
    const leftTextConfig = {
      easing: 'ease-in-out',
      duration: 1000,
      origin: 'left',
      distance: '100px',
      viewFactor: 0.3,
    };
    const rightTextConfig = {
      easing: 'ease-in-out',
      duration: 1000,
      origin: 'right',
      distance: '100px',
      viewFactor: 0.3,
    };
    const topTextConfig = {
      easing: 'ease-in-out',
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 0.3,
    }
    const teachersConfig = {
      viewFactor: 0.3,
      duration: 1000,
      distance: '125px',
      easing: 'ease-in-out',
      origin: 'top',
      interval: 150,
    }
    const instance = Reveal();
    instance.reveal($images, imagesConfig);
    instance.reveal($teachers, teachersConfig);
    instance.reveal($hero, rightTextConfig);
    instance.reveal($about, leftTextConfig);
    instance.reveal($numbers, rightTextConfig);
    instance.reveal($process, leftTextConfig);
    instance.reveal($teachersSect, topTextConfig);
    instance.reveal($reviews, topTextConfig);
  })
}


if(!isMobile()) {
  run();
}
else {
  $(document.documentElement).removeClass('sr');
}
