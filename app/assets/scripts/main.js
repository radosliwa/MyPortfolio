import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import MobileMenu from './modules/mobileMenu.js';
import StickyNav from './modules/stickyNav';

new MobileMenu();//
new RevealOnScroll($('.section'), "50%");
new StickyNav();

const $projectsLink = $('.projects__link');
const $PopUp = $('.popUp');
const $PopUpX = document.querySelector('.popUp__X').classList.value;
const $ProjectDescription = $('.popUp__projectDescription');

$projectsLink.on('click', function(e){
  $ProjectDescription.removeClass('popUp__projectDescription--visible');
  e.preventDefault();
  let dataMatch = e.target.getAttribute('data-match');
  // console.log(dataMatch);
  let descrId = document.getElementById(dataMatch).id;

  $PopUp.addClass('popUp--visible');
  if(dataMatch===descrId){
    descrId = "#" + descrId;
    $(descrId).addClass('popUp__projectDescription--visible');
  }
})

$PopUp.on('click', function(e){
  // console.log(e.target.getAttribute('class'));
  if(e.target.getAttribute('class')===$PopUpX){
    $PopUp.removeClass('popUp--visible');

  }
  })
