import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import MobileMenu from './modules/mobileMenu.js';
import StickyNav from './modules/stickyNav';

new MobileMenu();//
new RevealOnScroll($('.section'), "50%");
new StickyNav();

$(".projects__link").on('click', function(e){
  e.preventDefault();
  let dataMatch = e.target.getAttribute('data-match');
  let descr = document.getElementById(dataMatch).id;
  // console.log(descr);
  $(".projects__popUp").addClass('visible animated bounceInLeft');
  if(dataMatch===descr){
    descr = "#" + descr;
    $(descr).addClass('visible');


  }
  // console.log(dataMatch);



// console.log(e);
console.log(e.target);
// console.log(e.target.classList.value);
// console.log(this);

// console.log(descr);

})
  $('.projects__popUp__X').on('click', function(){
    $(".projects__popUp").removeClass('visible animated bounceInLeft');

  })
