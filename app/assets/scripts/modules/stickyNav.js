import $ from 'jquery';

const $mainNav = $('.main-nav');
const v = $('.scrollDown');
export default class StickyNav{
  constructor(){
    this.fixedNav();
  }
  fixedNav(){
    new Waypoint({
   element: $mainNav.get(0),
   handler: function(){

     $mainNav.toggleClass('main-nav--is-fixed');
   },
   offset: 0
 });
  }
}
