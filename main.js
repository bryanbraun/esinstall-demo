import { confetti } from "./web_modules/dom-confetti.js";

confetti(document.body.firstElementChild, {
  angle: "60",
  duration: "6000",
  stagger: "30",
});
