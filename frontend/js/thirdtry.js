

const images = [
    '../images/logoanim/Scholar Text Stroke0.png',
    '../images/logoanim/Scholar Text Stroke1.png',
    '../images/logoanim/Scholar Text Stroke2.png',
    '../images/logoanim/Scholar Text Stroke3.png',
    '../images/logoanim/Scholar Text Stroke4.png',
    '../images/logoanim/Scholar Text Stroke5.png',
    '../images/logoanim/Scholar Text Stroke6.png',
    '../images/logoanim/Scholar Text Stroke7.png',
    '../images/logoanim/Scholar Text Stroke8.png',
    '../images/logoanim/Scholar Text Stroke9.png',
    '../images/logoanim/Scholar Text Stroke10.png',
    '../images/logoanim/Scholar Text Stroke11.png',
    '../images/logoanim/Scholar Text Stroke12.png',
    '../images/logoanim/Scholar Text Stroke13.png',
    '../images/logoanim/Scholar Text Stroke14.png',
    '../images/logoanim/Scholar Text Stroke15.png',
    '../images/logoanim/Scholar Text Stroke16.png',
    '../images/logoanim/Scholar Text Stroke17.png',
    '../images/logoanim/Scholar Text Stroke18.png',
    '../images/logoanim/Scholar Text Stroke19.png',
    '../images/logoanim/Scholar Text Stroke20.png',
    '../images/logoanim/Scholar Text Stroke21.png',
    '../images/logoanim/Scholar Text Stroke22.png',
    '../images/logoanim/Scholar Text Stroke23.png',
    '../images/logoanim/Scholar Text Stroke24.png',
    '../images/logoanim/Scholar Text Stroke25.png',
    '../images/logoanim/Scholar Text Stroke26.png',
    '../images/logoanim/Scholar Text Stroke27.png',
    '../images/logoanim/Scholar Text Stroke28.png',
    '../images/logoanim/Scholar Text Stroke29.png',
    '../images/logoanim/Scholar Text Stroke30.png',
    '../images/logoanim/Scholar Text Stroke31.png',
    '../images/logoanim/Scholar Text Stroke32.png',
    '../images/logoanim/Scholar Text Stroke33.png',
    '../images/logoanim/Scholar Text Stroke34.png',
    '../images/logoanim/Scholar Text Stroke35.png',
    '../images/logoanim/Scholar Text Stroke36.png',
    '../images/logoanim/Scholar Text Stroke37.png',
    '../images/logoanim/Scholar Text Stroke38.png',
    '../images/logoanim/Scholar Text Stroke39.png',
    '../images/logoanim/Scholar Text Stroke40.png',
    '../images/logoanim/Scholar Text Stroke41.png',
    '../images/logoanim/Scholar Text Stroke42.png',
    '../images/logoanim/Scholar Text Stroke43.png',
    '../images/logoanim/Scholar Text Stroke44.png',
    '../images/logoanim/Scholar Text Stroke45.png',
    '../images/logoanim/Scholar Text Stroke46.png',
    '../images/logoanim/Scholar Text Stroke47.png',
    '../images/logoanim/Scholar Text Stroke48.png',
    '../images/logoanim/Scholar Text Stroke49.png',
    '../images/logoanim/Scholar Text Stroke50.png',
    '../images/logoanim/Scholar Text Stroke51.png',
    '../images/logoanim/Scholar Text Stroke52.png',
    '../images/logoanim/Scholar Text Stroke53.png',
    '../images/logoanim/Scholar Text Stroke54.png',
    '../images/logoanim/Scholar Text Stroke55.png',
    '../images/logoanim/Scholar Text Stroke56.png',
    '../images/logoanim/Scholar Text Stroke57.png',
    '../images/logoanim/Scholar Text Stroke58.png',
    '../images/logoanim/Scholar Text Stroke59.png',
    '../images/logoanim/Scholar Text Stroke60.png',
    '../images/logoanim/Scholar Text Stroke61.png',
    '../images/logoanim/Scholar Text Stroke62.png',
    '../images/logoanim/Scholar Text Stroke63.png',
    '../images/logoanim/Scholar Text Stroke64.png',
    '../images/logoanim/Scholar Text Stroke65.png',
    '../images/logoanim/Scholar Text Stroke66.png',
    '../images/logoanim/Scholar Text Stroke67.png',
    '../images/logoanim/Scholar Text Stroke68.png',
    '../images/logoanim/Scholar Text Stroke69.png',
    '../images/logoanim/Scholar Text Stroke70.png',
    '../images/logoanim/Scholar Text Stroke71.png',
    '../images/logoanim/Scholar Text Stroke72.png',
    '../images/logoanim/Scholar Text Stroke73.png',
    '../images/logoanim/Scholar Text Stroke74.png',
  ];
  

  const imageObjects = [];

  // Preload the images
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
    imageObjects.push(img);
  }
  
  const element = document.querySelector('.animation');
  
  let currentIndex = 0;
  let loopCount = 0;

  // Set the opacity to 0 initially
  element.style.opacity = 0;
  if (navigator.userAgent.indexOf('Firefox') === -1) {
    let firstLoopInterval = setInterval(() => {
          const img = imageObjects[currentIndex];
          anime({
              targets: element,
              backgroundImage: `url(${img.src})`,
              duration: 0,
          });
      }, 100);
  
    // Check if we've gone through the images twice before starting the animation
  
        let secondLoopInterval = setInterval(() => {
        const img = imageObjects[currentIndex];
        if (loopCount >= images.length * 2) {
          anime({
            targets: element,
            opacity: 1,
            duration: 0,
            backgroundImage: `url(${img.src})`,
          });
    }
  
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    loopCount++;



    if (loopCount >= images.length * 3 && img.src.includes('Scholar%20Text%20Stroke74')) {
        clearInterval(firstLoopInterval);
        clearInterval(secondLoopInterval);
        anime({
            targets: element,
            backgroundImage: `url(${img.srv})`,
            complete: function() {
                setTimeout(function() {
                    anime({
                        targets: element,
                        backgroundSize: '20%',
                        easing: 'easeInSine',
                        duration: 1500,
                    });
                }, 50);
            }
        });
    }
  }, 5);
} else {
  element.style.backgroundImage = `url('../images/logoanim/Scholar Text Stroke74.png')`;
  element.style.backgroundSize = '20%';
  element.style.transition = 'none'
  anime({
    targets: element,
    opacity: 1,
    easing: 'linear',
    duration: 2500
  });
}



  



  // Create an array to store the preloaded images
//   const imageObjects = [];
  
//   // Preload the images
//   for (let i = 0; i < images.length; i++) {
//     const img = new Image();
//     img.src = images[i];
//     imageObjects.push(img);
//   }

//   const element = document.querySelector('.animation');

//   let currentIndex = 0;

//   function changeBackgroundImage() {
//     const img = imageObjects[currentIndex];
//     anime({
//       targets: element,
//       backgroundImage: `url(${img.src})`,
//       duration: 0,
//     });
  
//     if (img.src.includes('Scholar_Text_Stroke10')) {
//       clearInterval(intervalId);
//     }
  
//     currentIndex++;
//     if (currentIndex >= images.length) {
//       currentIndex = 0;
//     }
//   }

// intervalId = setInterval(changeBackgroundImage, 30);

 

// const animateLogo = () => {
//     let imagesLoaded = 0;
//     const logoImages = [
//     //   '../images/logoanim/Scholar Text Stroke00.png',
//     //   '../images/logoanim/Scholar Text Stroke01.png',
//     //   '../images/logoanim/Scholar Text Stroke02.png',
//     //   '../images/logoanim/Scholar Text Stroke03.png',
//     //   '../images/logoanim/Scholar Text Stroke04.png',
//     //   '../images/logoanim/Scholar Text Stroke05.png',
//     //   '../images/logoanim/Scholar Text Stroke06.png',
//     //   '../images/logoanim/Scholar Text Stroke07.png',
//     //   '../images/logoanim/Scholar Text Stroke08.png',
//     //   '../images/logoanim/Scholar Text Stroke09.png',
//     //   '../images/logoanim/Scholar Text Stroke10.png',
//       '../images/logoanim/Scholar Text Stroke11.png',
//       '../images/logoanim/Scholar Text Stroke12.png',
//       '../images/logoanim/Scholar Text Stroke13.png',
//       '../images/logoanim/Scholar Text Stroke14.png',
//       '../images/logoanim/Scholar Text Stroke15.png',
//       '../images/logoanim/Scholar Text Stroke16.png',
//       '../images/logoanim/Scholar Text Stroke17.png',
//       '../images/logoanim/Scholar Text Stroke18.png',
//       '../images/logoanim/Scholar Text Stroke19.png',
//       '../images/logoanim/Scholar Text Stroke20.png',
//       '../images/logoanim/Scholar Text Stroke21.png',
//       '../images/logoanim/Scholar Text Stroke22.png',
//       '../images/logoanim/Scholar Text Stroke23.png',
//       '../images/logoanim/Scholar Text Stroke24.png',
//       '../images/logoanim/Scholar Text Stroke25.png',
//       '../images/logoanim/Scholar Text Stroke26.png',
//       '../images/logoanim/Scholar Text Stroke27.png',
//       '../images/logoanim/Scholar Text Stroke28.png',
//       '../images/logoanim/Scholar Text Stroke29.png',
//       '../images/logoanim/Scholar Text Stroke30.png',
//       '../images/logoanim/Scholar Text Stroke31.png',
//       '../images/logoanim/Scholar Text Stroke32.png',
//       '../images/logoanim/Scholar Text Stroke33.png',
//       '../images/logoanim/Scholar Text Stroke34.png',
//       '../images/logoanim/Scholar Text Stroke35.png',
//       '../images/logoanim/Scholar Text Stroke36.png',
//       '../images/logoanim/Scholar Text Stroke37.png',
//       '../images/logoanim/Scholar Text Stroke38.png',
//       '../images/logoanim/Scholar Text Stroke39.png',
//       '../images/logoanim/Scholar Text Stroke40.png',
//       '../images/logoanim/Scholar Text Stroke41.png',
//       '../images/logoanim/Scholar Text Stroke42.png',
//       '../images/logoanim/Scholar Text Stroke43.png',
//       '../images/logoanim/Scholar Text Stroke44.png',
//       '../images/logoanim/Scholar Text Stroke45.png',
//       '../images/logoanim/Scholar Text Stroke46.png',
//       '../images/logoanim/Scholar Text Stroke47.png',
//       '../images/logoanim/Scholar Text Stroke48.png',
//       '../images/logoanim/Scholar Text Stroke49.png',
//       '../images/logoanim/Scholar Text Stroke50.png',
//       '../images/logoanim/Scholar Text Stroke51.png',
//       '../images/logoanim/Scholar Text Stroke52.png',
//       '../images/logoanim/Scholar Text Stroke53.png',
//       '../images/logoanim/Scholar Text Stroke54.png',
//       '../images/logoanim/Scholar Text Stroke55.png',
//       '../images/logoanim/Scholar Text Stroke56.png',
//       '../images/logoanim/Scholar Text Stroke57.png',
//       '../images/logoanim/Scholar Text Stroke58.png',
//       '../images/logoanim/Scholar Text Stroke59.png',
//       '../images/logoanim/Scholar Text Stroke60.png',
//       '../images/logoanim/Scholar Text Stroke61.png',
//       '../images/logoanim/Scholar Text Stroke62.png',
//       '../images/logoanim/Scholar Text Stroke63.png',
//       '../images/logoanim/Scholar Text Stroke64.png',
//       '../images/logoanim/Scholar Text Stroke65.png',
//       '../images/logoanim/Scholar Text Stroke66.png',
//       '../images/logoanim/Scholar Text Stroke67.png',
//       '../images/logoanim/Scholar Text Stroke68.png',
//       '../images/logoanim/Scholar Text Stroke69.png',
//       '../images/logoanim/Scholar Text Stroke70.png',
//       '../images/logoanim/Scholar Text Stroke71.png',
//       '../images/logoanim/Scholar Text Stroke72.png',
//       '../images/logoanim/Scholar Text Stroke73.png',
//       '../images/logoanim/Scholar Text Stroke74.png',
//     ];

//     const myBody = document.getElementById("myBody");

//     // preload the images
//     for (let i = 0; i < logoImages.length; i++) {
//         const image = new Image();
//         image.src = logoImages[i];
//         localStorage.setItem(i, image.src);
//         console.log("preloading");
//     }
  
   
//     const switchImage = () => {
//       if(myBody) {
//         for (let i=0;i<2;i++){
//               myBody.style.backgroundImage = `url(${localStorage.getItem(currentImageIndex)})`;
//             //   myBody.style.display = 'none';
//               // img.remove(); // Remove the img element from the DOM
//           };
//         }

//         // img.onload = function() {
//         //     setTimeout(function() {
//         //       myBody.style.backgroundImage = `url(${localStorage.getItem(currentImageIndex)})`;
//         //       // img.remove(); // Remove the img element from the DOM
//         //     }, 100);
//         //   };]
//         setTimeout(switchImage,10)
//     }
//         currentImageIndex = (currentImageIndex + 1) % logoImages.length;
//         // setTimeout(switchImage, 30);    
//     }
  
//     if (myBody) {
//         switchImage();
//     };

   

//   document.addEventListener("DOMContentLoaded", () => {
//     animateLogo();
//   });