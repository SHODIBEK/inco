import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
// import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
import "./vendor/pace";
import 'owl.carousel';