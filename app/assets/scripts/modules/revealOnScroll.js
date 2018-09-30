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
          let p = $(current).find($pForProjectSection);
          let h3 = $(current).find($h3ForProjectSection);
            $(current).addClass('revealItem--is-visible');
            that.technologies();
            p.addClass('animated bounceInLeft');
            h3.addClass('animated bounceInLeft');

            // $h3ForProjectSection.addClass('animated bounceInLeft');
            // $pForProjectSection.addClass('animated bounceInLeft');
      },
        offset: offset
      });

    });
  }
    technologies(){

      for (let i = 0; i < $textModifications__spanTechnology.length; i++) {
          let check = document.querySelectorAll(".text-modifications__span--technology");
          $(check).eq(i).css('animation-delay', i/6 + 's').addClass('animated flipInX');
          // console.log(i);
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
              $(sectionTitle).addClass('section__title--lineThrough');
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
