import $ from 'jquery';
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints.js";

class RevealOnScroll{
  constructor(el, offset){
    this.itemsToReveal = el;
    this.hide();
    this.wayPoints(offset);
  }

  hide(){
  this.itemsToReveal.addClass('revealItem');
  }

  wayPoints(offset){
    this.itemsToReveal.each(function(){
      let current = this;
      let sectionTitle = $(current).find('.section__title');
      let mainNav = $('.main-nav');
      new Waypoint({
        element: current,
        handler: function() {
          $(current).addClass('revealItem--is-visible');
          // $(mainNav).addClass('main-nav--is-fixed');
          $(sectionTitle).toggleClass('section__title--lineThrough');
          console.log(sectionTitle);
        },

        offset: offset
      });
    });}

}



new RevealOnScroll($('.section'), "40%");
