import TimelineLite from "gsap/TimelineLite";
import { Power1 } from 'gsap';
const MENU_TRANSITION_TIME = 0.35;

const $button = $('.hamburger');
const $menu = $('.menu');
const $lis = $menu.find('li');
const $overlay = $('.overlay');


let isAnimating = false;

export function openMenu() {
  const tl = new TimelineLite();
  $button.addClass('is-active');  
  $menu.css({ visibility: 'visible' });
  tl
    .to($menu, MENU_TRANSITION_TIME, {
      x: '0%',
      ease: Power1.easeInOut,
      onComplete() {
        isAnimating = false;
      }
    })
    .to($overlay, MENU_TRANSITION_TIME, {
      onStart() { 
        $overlay.css({ display: 'block' }) 
      },
      opacity: 0.3,
      ease: Power1.easeInOut,
    }, 0)

    .staggerFromTo($lis, 0.25, {
      y: -70,
      opacity: 0,
    }, {
      y: 0, 
      opacity: 1,
      ease: Power1.easeOut,
    }, 0.05, 0.2);
}
export function hideMenu() {
  const tl = new TimelineLite();
  $button.removeClass('is-active');
  tl
    .to($menu, MENU_TRANSITION_TIME, {
      x: '-100%',
      ease: Power1.easeIn,
      onComplete() {
        $menu.css({ visibility: 'hidden' });
        isAnimating = false;
      }
    })
    .to($overlay, MENU_TRANSITION_TIME, {
      opacity: 0,
      ease: Power1.easeInOut,
      onComplete() {
        $overlay.css({ display: 'none' });
      }
    }, 0)
    .staggerTo($lis, 0.25, {
      y: -70,
      opacity: 0,
      ease: Power1.easeOut,
    }, 0.05, 0)

}
function clickHandler() {
  if(isAnimating) return;
  isAnimating = true;
  const isOpen = $button.hasClass('is-active');
  isOpen ? hideMenu() : openMenu();
}
function overlayClickHandler() {
  !isAnimating && hideMenu()
}

$button.click(clickHandler);
$overlay.click(overlayClickHandler);
$(document).keydown(({ key }) => {
  if(key === 'Escape') {
    overlayClickHandler();
  }
});
