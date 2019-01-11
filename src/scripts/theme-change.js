const DARK_THEME = 'dark-theme';
const LIGHT_LOGO_URL = '/images/logo_light.svg';
const DARK_LOGO_URL = '/images/logo_dark.svg';

const $wrap = $('.main-wrapper');
const $btn = $('.theme-toggler');
const $logo = $('.logo');

const clickHandler = () => {
  // switch to the light theme
  if($wrap.hasClass(DARK_THEME)) {
    $wrap.removeClass(DARK_THEME);
    $btn.html('<i class="icon-moon"></i>');
    $logo.attr('src', DARK_LOGO_URL);
  }
  // dark
  else {
    $wrap.addClass(DARK_THEME);
    $btn.html('<i class="icon-sun"></i>');
    $logo.attr('src', LIGHT_LOGO_URL);
  }
}
$btn.click(clickHandler);
