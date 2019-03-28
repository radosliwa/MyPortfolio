import $ from 'jquery';
import RevealOnScroll from './modules/revealOnScroll';
import MobileMenu from './modules/mobileMenu.js';
import StickyNav from './modules/stickyNav';

new MobileMenu(); //
new RevealOnScroll($('.section'), "50%");
new StickyNav();

const $projectsLink = $('.projects__link');
const $PopUp = $('.popUp');
const $PopUpX = $('.popUp__X');
const $ProjectDescription = $('.popUp__projectDescription');
const $MailEnvelope = $('.icons__contact a:nth-child(2)');

$projectsLink.on('click', function(e) {
  $ProjectDescription.removeClass('popUp__projectDescription--visible');
  e.preventDefault();
  let dataMatch = e.target.getAttribute('data-match');

  let descrId = document.getElementById(dataMatch).id;
  $PopUp.addClass('popUp--visible');

  if (dataMatch === descrId) {
    descrId = "#" + descrId;
    $(descrId).addClass('popUp__projectDescription--visible');
  }
})

$PopUp.on('click', ".popUp__X", function() {
  $PopUp.removeClass('popUp--visible');
})
$(document).keydown(function(e) {
  var keys = e.keyCode === 27 || e.which === 27;
  var popUpVisibility = $PopUp.hasClass('popUp--visible');

  if (popUpVisibility && keys) {
    console.log(e.keyCode + " pressed");
    $PopUp.removeClass('popUp--visible');
  }
})

$MailEnvelope.click(function(e) {
  e.preventDefault();
  alert('Not yet active, please use contact form for now');
});