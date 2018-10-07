import $ from 'jquery';


export default class MobileMenu{
  constructor(){
    this.mainNav = $('.main-nav');
    this.menuMobileIcon = $('.main-nav__menuMobileIcon');
    this.navMenu = $('.main-nav__menu');
    this.events();
  }
  events(){
    this.menuMobileIcon.click(this.toggleTheMenu.bind(this));

  }
  toggleTheMenu(){
    this.navMenu.toggleClass('main-nav__menu--is-visible');
    this.menuMobileIcon.toggleClass('main-nav__menuMobileIcon--close-x');
  }
}
