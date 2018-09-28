import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import StickyNav from './modules/stickyNav';

new RevealOnScroll($('.section'), "20%");
new StickyNav();
