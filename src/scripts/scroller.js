import jump from 'jump.js'
import { hideMenu } from './menu';


const $cont = $('.main-wrapper');

function clickHandler({ target }) {
  // if menu is open close it
  if($('.hamburger').hasClass('is-active')) {
    hideMenu();
  }
  const selector = target.href.match(/#.*/)[0];
  jump(selector);
  return false;
}
$("a[href*=\\#]").click(clickHandler)
