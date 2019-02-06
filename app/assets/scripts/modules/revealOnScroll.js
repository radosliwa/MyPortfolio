import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.js";
import smoothScroll from 'jquery-smooth-scroll';

const $mainNavMenu = $('.main-nav__menu');
const $hamburger = $('.main-nav__menuMobileIcon');
const $navLinks = $mainNavMenu.find('a');
const $h3ForProjectSection = $(".text-modifications__h3--ForProjectSection");
const $pForProjectSection = $(".text-modifications__p--ForProjectSectionM");
const $textModifications__spanTechnology = $(".text-modifications__span--technology");

export default class RevealOnScroll {
  constructor(el, offset) {
    this.itemsToReveal = el;
    this.hide();
    this.wayPoints(offset);
    this.lineThrough();
    this.smoothScroll();

  }

  hide() {
    this.itemsToReveal.addClass('revealItem');
  }

  wayPoints(offset) {
    let that = this;
    this.itemsToReveal.each(function() {
      let current = this;
      let allSectionTitles = $('.section__title');
      let sectionTitle = $(current).find('.section__title');

      new Waypoint({
        element: current,
        handler: function() {
          let p = $(current).find($pForProjectSection);
          let h3 = $(current).find($h3ForProjectSection);

          $(current).addClass('revealItem--is-visible');
          p.addClass('animated bounceInLeft');
          h3.addClass('animated bounceInLeft');
          if ($('#about').hasClass('revealItem--is-visible')) {
            console.log('working');
            that.technologies();

          }

        },
        offset: offset
      });

    });
  }
  technologies() {

    for (let i = 0; i < $textModifications__spanTechnology.length; i++) {
      let check = document.querySelectorAll(".text-modifications__span--technology");
      $(check).eq(i).css('animation-delay', (i + 1) / 3 + 's').addClass('animated flipInX');

    }
  }

  lineThrough() {
    this.itemsToReveal.each(function() {
      let current = this;
      let allSectionTitles = $('.section__title');
      let sectionTitle = $(current).find('.section__title');
      let linkHighlight = current.getAttribute('data-match');
      $navLinks.removeClass('is--current-link');

      new Waypoint({
        element: current,
        handler: function(direction) {
          if (direction === "down") {
            $navLinks.removeClass('is--current-link');
            $(linkHighlight).addClass('is--current-link');
            $(allSectionTitles).removeClass('section__title--lineThrough');
            $(sectionTitle).addClass('section__title--lineThrough');
            // alert('top');
          }
        },
        offset: "55%"
      });

      new Waypoint({
        element: current,
        handler: function(direction) {
          if (direction === "up") {
            $navLinks.removeClass('is--current-link');
            $(linkHighlight).addClass('is--current-link');
            $(allSectionTitles).removeClass('section__title--lineThrough');
            $(sectionTitle).addClass('section__title--lineThrough');
          }
        },
        offset: "-15%"
      });
    });
  }

  smoothScroll() {
    $navLinks.smoothScroll({
      offset: -100
    });
    $navLinks.click(function() {
      $mainNavMenu.removeClass('main-nav__menu--is-visible');
      $hamburger.removeClass('main-nav__menuMobileIcon--close-x');
    })
    /*expanded mobilemenu doesnt cover section title */
  }

}