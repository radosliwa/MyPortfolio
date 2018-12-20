import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import MobileMenu from './modules/mobileMenu.js';
import StickyNav from './modules/stickyNav';

new MobileMenu();//
new RevealOnScroll($('.section'), "50%");
new StickyNav();

$(".projects__link").on('click', function(e){
  e.preventDefault();
  let dataMatch = this.getAttribute('data-match');
  let descr = $(".projects__popUp").find(dataMatch).get(0);
  $(".projects__popUp").addClass('visible animated bounceInLeft');



// console.log(e);
// console.log(e.target);
// console.log(this);
// console.log(e.childNodes);
console.log(dataMatch);
console.log(descr);

})
  $('.projects__popUp__X').on('click', function(){
    $(".projects__popUp").removeClass('visible animated bounceInLeft');

  })
