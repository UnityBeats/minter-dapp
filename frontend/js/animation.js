function padNumber(num, size) {
    let s = num.toString();
    while (s.length < size) {
      s = "0" + s;
    }
    return s;
  }

const animation = document.getElementById("animation");
const images = [];
const numImages = 74; // number of images in the sequence
let currentFrame = 0;
let animationId;

// preload images
for (let i = 1; i <= numImages; i++) {
    const img = new Image();
    img.src = `images/logoanim/Scholar Text Stroke${padNumber(i, 2)}.png`;
    images.push(img);
  }

// function to update the animation
function updateAnimation() {
// update the image
animation.style.backgroundImage = `url(${images[currentFrame].src})`;

// increment the current frame
currentFrame++;

// check if we've reached the end of the animation
if (currentFrame >= numImages) {
    // stop the animation
    window.clearTimeout(animationId);
    cancelAnimationFrame(animationId);
    // do whatever you want to do when the animation is complete
    animation.style.backgroundImage = "url(images/logoanim/Scholar Text Stroke74.png)";
    return;
}

// request the next frame
animationId = setTimeout(updateAnimation, 1000/30);
}

// start the animation
animationId = requestAnimationFrame(updateAnimation);