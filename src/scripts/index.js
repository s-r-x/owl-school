require('slick-carousel/slick/slick.css');
require('../styles/index.less');

import CSSPlugin from 'gsap/CSSPlugin'
import $ from 'jquery';

const gsapPlugins = [ CSSPlugin ];

window.$ = $;
window.jquery = $;
window.Jquery = $;
window.jQuery = $;

require('./preloader');
require('./carousel');
require('./theme-change');
require('./menu');
require('./scroller');
require('./reveal');
require('./modal');
