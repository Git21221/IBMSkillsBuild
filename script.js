
// animation 
function stars() {
  let count = 50;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = "1px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();

function stars() {
  let count = 50;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = "1px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();


function startAnimation() {
  let loadingPage = document.getElementById('loading-page');
  loadingPage.classList.add('animate');

  // Wait for the animation to complete (adjust the duration as needed)
  setTimeout(function () {
    // Redirect to the new page after animation completes
    window.location.href = 'newpage.html';
  }, 2000); // 2 seconds (adjust the duration as needed)
}


// for open pages
var animationWindow; // Global variable to store the reference to the animation window
var secondWindow;

function openPages() {
  // Open animation page
  animationWindow = window.open("/rocket-animation/rocket.html");

  // After 10 seconds, open the second page and hide the animation page within it
  setTimeout(function () {
    animationWindow.close();
    var secondWindow = window.open("/2nd-page/2nd.html");
  }, 3000);
}


