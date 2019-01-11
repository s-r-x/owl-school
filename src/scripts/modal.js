import TweenLite from 'gsap/TweenLite'
import { Power1 } from 'gsap';

const $modal = $('.modal');
const $closeBtn = $modal.find('.modal-close-btn');
const $form = $modal.find('form');
const $submitBtn = $form.find('button[type="submit"]');

let isAnimating = false;
export function openModal() {
  if(isAnimating) return;
  // already opened
  if($modal.attr('data-open')) return;
  TweenLite.fromTo($modal, 0.5, {
    y: -100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    ease: Power1.easeInOut,
    onStart() {
      isAnimating = true;
      $modal.css({ display: 'block' });
    },
    onComplete() {
      $modal.attr({ 'data-open': true });
      isAnimating = false;
    },
  });
}
export function hideModal() {
  if(isAnimating) return;
  // not opened
  if(!$modal.attr('data-open')) return;
  TweenLite.to($modal, 0.6, {
    y: -100,
    opacity: 0,
    ease: Power1.easeInOut,
    onStart() {
      isAnimating = true;
    },
    onComplete() {
      isAnimating = false;
      $modal.css({ display: 'none' });
      $modal.removeAttr('data-open');
    }
  });
}

let isSubmitting = false;
function submitHandler(e) {
  e.preventDefault();
  if(isSubmitting) return;
  isSubmitting = true;
  $submitBtn.html('<img src="/images/loader.svg"/>');
  setTimeout(() => {
    isSubmitting = false;
    alert('Ваше сообщение отправлено. Вскоре мы вам ответим.');
    hideModal();
    $submitBtn.html('Отправить');
  }, 1000);
}

$('.open-modal-btn').click(openModal);
$closeBtn.click(hideModal);
$form.submit(submitHandler);
