import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.js";
import smoothScroll from 'jquery-smooth-scroll';

const $navLinks = $('.main-nav__menu a');
const $h3ForProjectSection = $(".text-modifications__h3--ForProjectSection");
const $pForProjectSection = $(".text-modifications__p--ForProjectSectionM");
const $textModifications__spanTechnology = $(".text-modifications__span--technology");

export default class RevealOnScroll{
  constructor(el, offset){
    this.itemsToReveal = el;
    this.hide();
    this.wayPoints(offset);
    this.smoothScroll();
    this.lineThrough();
  }

  hide(){
  this.itemsToReveal.addClass('revealItem');
  }

  wayPoints(offset){
    let that = this;
    this.itemsToReveal.each(function(){
      let current = this;
      let allSectionTitles = $('.section__title');
      let sectionTitle = $(current).find('.section__title');
      new Waypoint({
        element: current,
        handler: function() {
            $(current).addClass('revealItem--is-visible');
            that.technologies();
            $h3ForProjectSection.addClass('animated bounceInLeft');
            $pForProjectSection.addClass('animated bounceInLeft');
      },
        offset: offset
      });
    });
  }
    technologies(){
      console.log($textModifications__spanTechnology);
      for (let i = 0; i < $textModifications__spanTechnology.length; i++) {
        setTimeout(function(){
          $textModifications__spanTechnology.eq(i).css('animation-delay','1s').addClass('animated bounceInLeft');

        },1000)
  }
    }
    lineThrough(){
      this.itemsToReveal.each(function(){
        let current = this;
        let allSectionTitles = $('.section__title');
        let sectionTitle = $(current).find('.section__title');

          new Waypoint({
            element: current,
            handler: function(direction) {
              if(direction === "down"){
              $(allSectionTitles).removeClass('section__title--lineThrough');
              $($textModifications__spanTechnology).addClass('section__title--lineThrough');
              // alert('top');
            }
            },
            offset: "45%"
          });

          new Waypoint({
            element: current,
            handler: function(direction) {
              if(direction === "up"){
                $(allSectionTitles).removeClass('section__title--lineThrough');
                $(sectionTitle).addClass('section__title--lineThrough');
              }
            },
            offset: "5%"
          });
      });
    }

    smoothScroll(){
      $navLinks.smoothScroll({offset:-50});
    }

}
