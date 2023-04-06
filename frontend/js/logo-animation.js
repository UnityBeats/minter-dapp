

const animateLogo = () => {
    let imagesLoaded = 0;
    const logoImages = [
      '../images/logoanim/Scholar Text Stroke00.png',
      '../images/logoanim/Scholar Text Stroke01.png',
      '../images/logoanim/Scholar Text Stroke02.png',
      '../images/logoanim/Scholar Text Stroke03.png',
      '../images/logoanim/Scholar Text Stroke04.png',
      '../images/logoanim/Scholar Text Stroke05.png',
      '../images/logoanim/Scholar Text Stroke06.png',
      '../images/logoanim/Scholar Text Stroke07.png',
      '../images/logoanim/Scholar Text Stroke08.png',
      '../images/logoanim/Scholar Text Stroke09.png',
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

    const myBody = document.getElementById("myBody");

    // preload the images
    for (let i = 0; i < logoImages.length; i++) {
        const image = new Image();
        image.src = logoImages[i];
        localStorage.setItem(i, logoImages[i]);
    }
  
   
    const switchImage = () => {
      if(myBody) {
        for (let i=0;i<2;i++){
          img.onload = function() {
            setTimeout(function() {
              myBody.style.backgroundImage = `url(${localStorage.getItem(currentImageIndex)})`;
              img.style.display = 'none';
              // img.remove(); // Remove the img element from the DOM
            }, 10);
          };
        }

        img.onload = function() {
            setTimeout(function() {
              myBody.style.backgroundImage = `url(${localStorage.getItem(currentImageIndex)})`;
              // img.remove(); // Remove the img element from the DOM
            }, 100);
          };
    }
        currentImageIndex = (currentImageIndex + 1) % logoImages.length;
        // setTimeout(switchImage, 30);    
    }
  
    if (myBody) {
        switchImage();
    };

};    

  document.addEventListener("DOMContentLoaded", () => {
    animateLogo();
  });