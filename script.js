
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