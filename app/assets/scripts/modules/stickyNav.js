import $ from 'jquery';

const $mainNav = $('.main-nav');

export default class StickyNav{
  constructor(){
    this.fixedNav();
  }
  fixedNav(){
    new Waypoint({
   element: $mainNav.get(0),
   handler: function(){
     console.log($mainNav.get(0));
     $mainNav.toggleClass('main-nav--is-fixed');

   },
   offset: 0
 });
  }
}
