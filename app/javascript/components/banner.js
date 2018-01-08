import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["A Simple Portfolio", "Featuring Some Vanilla Testing"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
