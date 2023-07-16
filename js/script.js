function openRocket() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/rocket.html", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.documentElement.innerHTML = xhr.responseText;
      setTimeout(() => {
        window.location.href = "/sec-page/second.html";
      }, 25000);
    }
  };
  xhr.send();
}


// aos prevent default setting

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// for scroll to top

const scrollElement = document.querySelector(".scroll-top");

const scrollMax = document.querySelector(".firstsection");

const scrollTop = () => {
  scrollMax.scrollIntoView({ behaviour: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);