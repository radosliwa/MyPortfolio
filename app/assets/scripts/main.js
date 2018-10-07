import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import MobileMenu from './modules/mobileMenu.js';
import StickyNav from './modules/stickyNav';

new MobileMenu();//
new RevealOnScroll($('.section'), "50%");
new StickyNav();
