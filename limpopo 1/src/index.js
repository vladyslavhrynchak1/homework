// Watchers for scss and html files
import "./index.scss";
// import "./scripts/watchers/_pages"

// Import modules
// import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
// import { Elements } from "./scripts/modules/elements";
import {sliderVisitors} from "./scripts/modules/visitorsslide";
import {animalsSlide } from "./scripts/modules/animalsSlide";
import { tabsAnimals } from "./scripts/modules/tabsAnimals";
import { newsSlide } from "./scripts/modules/newsSlide";
// Import methods
// import { includeHTML } from "./scripts/methods/_includeComponents";

// Bisiness logic
document.addEventListener('DOMContentLoaded', () => {
    sliderVisitors();
    animalsSlide();
    tabsAnimals();
    newsSlide();
});


