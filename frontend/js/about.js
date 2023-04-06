window.addEventListener('load', function() {
    document.body.classList.remove('preload');
  });

  window.addEventListener('load', () => {
    fadeIn(currentImageIndex);
    carouseldivsfadeIn(currentCarouseldivsIndex);
  });

var carousel = document.querySelector(".carousel");
var currdeg = 0;
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var numItems = document.querySelectorAll(".item").length;
var itemWidth = 72;

updateVisibleItems(0);
setActiveFunctions(0);

var isAnimating = false;
next.disabled = isAnimating;
prev.disabled = isAnimating;

next.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        currdeg = currdeg - itemWidth;
        var currentItemIndex = getCurrentItemIndex();
        updateVisibleItems(currentItemIndex);
        setActiveFunctions(currentItemIndex);
        carousel.style.transform = "rotateY("+currdeg+"deg)";// add is-animating class to carousel
      
        next.disabled = true;
        prev.disabled = true;
        setTimeout(function() {
            next.disabled = false;
            prev.disabled = false;
            isAnimating = false;
        }, 2000);

        fadeOut();
        setTimeout(function() { fadeIn(currentItemIndex); }, 1000);
        currentImageIndex = getCurrentImageIndex(currentItemIndex, 'next');
        carouseldivsfadeOut();
        setTimeout(function() { carouseldivsfadeIn(currentItemIndex); }, 1000);
        currentCarouseldivsIndex = getCurrentCarouseldivsIndex(currentItemIndex, 'next');
      }
});
  
prev.addEventListener("click", function() {
    if (!isAnimating) {
      isAnimating = true;
      currdeg = currdeg + itemWidth;
      var currentItemIndex = getCurrentItemIndex();
      updateVisibleItems(currentItemIndex);
      setActiveFunctions(currentItemIndex);
      carousel.style.transform = "rotateY("+currdeg+"deg)";
  
      // Disable buttons for 1 second to prevent rapid clicking
      next.disabled = true;
      prev.disabled = true;
      setTimeout(function() {
        next.disabled = false;
        prev.disabled = false;
        isAnimating = false;
      }, 2000);
  
      fadeOut();
      setTimeout(function() { fadeIn(currentItemIndex); }, 1000);
      currentImageIndex = getCurrentImageIndex(currentItemIndex, 'prev');
      carouseldivsfadeOut();
      setTimeout(function() { carouseldivsfadeIn(currentItemIndex); }, 1000);
      currentCarouseldivsIndex = getCurrentCarouseldivsIndex(currentItemIndex, 'prev');
    }
});
  
document.addEventListener("keydown", function(event) {
    if (!isAnimating) {
        if (event.key === "ArrowLeft") { // left arrow key
        isAnimating = true;
        currdeg = currdeg + itemWidth;
        var currentItemIndex = getCurrentItemIndex();
        updateVisibleItems(currentItemIndex);
        setActiveFunctions(currentItemIndex);
        carousel.style.transform = "rotateY("+currdeg+"deg)";

        // Disable buttons for 1 second to prevent rapid clicking
        next.disabled = true;
        prev.disabled = true;
        setTimeout(function() {
            next.disabled = false;
            prev.disabled = false;
            isAnimating = false;
        }, 2000);

        fadeOut();
        setTimeout(fadeIn(currentItemIndex), 1000);
        carouseldivsfadeOut();
        setTimeout(carouseldivsfadeIn(currentItemIndex), 1000);
        } else if (event.key === "ArrowRight") { // right arrow key
        isAnimating = true;
        currdeg = currdeg - itemWidth;
        var currentItemIndex = getCurrentItemIndex();
        updateVisibleItems(currentItemIndex);
        setActiveFunctions(currentItemIndex);
        carousel.style.transform = "rotateY("+currdeg+"deg)";

        // Disable buttons for 1 second to prevent rapid clicking
        next.disabled = true;
        prev.disabled = true;
        setTimeout(function() {
            next.disabled = false;
            prev.disabled = false;
            isAnimating = false;
        }, 2000);

        fadeOut();
        setTimeout(fadeIn(currentItemIndex), 1000);
        carouseldivsfadeOut();
        setTimeout(carouseldivsfadeIn(currentItemIndex), 1000);
        }
    }
});

function getCurrentItemIndex() {
    var index = Math.round(-currdeg / itemWidth) % numItems;
    if (index < 0) {
      index += numItems;
    }
    return index;
}

function updateVisibleItems(currentItemIndex) {
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
        if (i === currentItemIndex) {
        items[i].style.opacity = 1;
        } else {
        items[i].style.opacity = 0;
        }
    }
}
  
  const images = document.querySelectorAll('.bgimage-container img');
  let currentImageIndex = 0;
  const imageCount = images.length;

  function getCurrentImageIndex(currentItemIndex, direction) {
    let currentImageIndex = currentItemIndex;
  
    if (direction === 'next') {
      currentImageIndex = (currentItemIndex + 1) % imageCount;
    } else if (direction === 'prev') {
      currentImageIndex = currentItemIndex === 0 ? imageCount - 1 : currentItemIndex - 1;
    }
  
    return currentImageIndex;
  }
  
  // function to fade out the current image
  function fadeOut() {
    images[currentImageIndex].style.opacity = 0;
  }
  
  // function to fade in the next image
  function fadeIn(currentItemIndex) {
    currentImageIndex = getCurrentImageIndex(currentItemIndex);
    images[currentImageIndex].style.opacity = 1;
  }

//mobile fade in and out for divs

const carouseldivs = document.querySelectorAll('.mobile-read');
  let currentCarouseldivsIndex = 0;
  const carouseldivsCount = carouseldivs.length;

  function getCurrentCarouseldivsIndex(currentItemIndex, direction) {
    let currentCarouseldivsIndex = currentItemIndex;
  
    if (direction === 'next') {
      currentCarouseldivsIndex = (currentItemIndex + 1) % carouseldivsCount;
    } else if (direction === 'prev') {
      currentCarouseldivsIndex = currentItemIndex === 0 ? carouseldivsCount - 1 : currentItemIndex - 1;
    }
  
    return currentCarouseldivsIndex;
  }
  
  function carouseldivsfadeOut() {
    carouseldivs[currentCarouseldivsIndex].style.opacity = 0;
  }
  
  function carouseldivsfadeIn(currentItemIndex) {
    currentCarouseldivsIndex = getCurrentCarouseldivsIndex(currentItemIndex);
    carouseldivs[currentCarouseldivsIndex].style.opacity = 1;
  }

//set active div functions
function setActiveFunctions(currentItemIndex) {
    if (currentItemIndex === 0) {
      // enable cicw div functions and disable others
      iscicwDivEnabled = true;
      isdsnoyDivEnabled = false;
      isevcwyDivEnabled = false;
      isgsvxDivEnabled = false;
      isuskgDivEnabled = false;
    } else if (currentItemIndex === 1) {
      // enable dsnoy div functions and disable others
      isdsnoyDivEnabled = true;
      iscicwDivEnabled = false;
      isevcwyDivEnabled = false;
      isgsvxDivEnabled = false;
      isuskgDivEnabled = false;
    } else if (currentItemIndex === 2) {
        isdsnoyDivEnabled = false;
        iscicwDivEnabled = false;
        isevcwyDivEnabled = true;
        isgsvxDivEnabled = false;
        isuskgDivEnabled = false;
    } else if (currentItemIndex === 3) {
        isdsnoyDivEnabled = false;
        iscicwDivEnabled = false;
        isevcwyDivEnabled = false;
        isgsvxDivEnabled = true;
        isuskgDivEnabled = false; 
    } else if (currentItemIndex === 4) {
        isdsnoyDivEnabled = false;
        iscicwDivEnabled = false;
        isevcwyDivEnabled = false;
        isgsvxDivEnabled = false;
        isuskgDivEnabled = true; 
    }
}

  
  // cicw divs


function showcicwDiv() {
    if (iscicwDivEnabled) {
        const cicwDivs = document.querySelectorAll(".cicw-div1, .cicw-div2, .cicw-div3");
        cicwDivs.forEach(function(cicwDiv) {
            cicwDiv.classList.add("show-x");
        });
    }
}

  function hidecicwDiv() {
    if (iscicwDivEnabled) {
            const cicwDivs = document.querySelectorAll(".cicw-div1, .cicw-div2, .cicw-div3");
            cicwDivs.forEach(function(cicwDiv) {
                cicwDiv.classList.remove("show-x");
            });
    }
  }

  let expandcicwDivTimeout;

  function expandcicwDiv() {
    if (iscicwDivEnabled) {
      expandcicwDivTimeout = setTimeout(function() {
        const cicwDivs = document.querySelectorAll(".cicw-div1, .cicw-div2, .cicw-div3");
        cicwDivs.forEach(function(cicwDiv) {
          cicwDiv.classList.add("show-y");
        });
      }, 1000);
    }
  }
  
  function retractcicwDiv() {
    if (iscicwDivEnabled) {
        clearTimeout(expandcicwDivTimeout);
            const cicwDivs = document.querySelectorAll(".cicw-div1, .cicw-div2, .cicw-div3");
            cicwDivs.forEach(function(cicwDiv) {
                cicwDiv.classList.remove("show-y");
            });
    }
  }

  //dsnoy divs

function showdsnoyDiv() {
    if (isdsnoyDivEnabled) {
        const dsnoyDivs = document.querySelectorAll(".dsnoy-div1, .dsnoy-div2, .dsnoy-div3");
        dsnoyDivs.forEach(function(dsnoyDiv) {
            dsnoyDiv.classList.add("show-x");
        });
    }
}
  
function hidedsnoyDiv() {
    if (isdsnoyDivEnabled) {
        const dsnoyDivs = document.querySelectorAll(".dsnoy-div1, .dsnoy-div2, .dsnoy-div3");
        dsnoyDivs.forEach(function(dsnoyDiv) {
          dsnoyDiv.classList.remove("show-x");
        });
    }
  }

  let expanddsnoyDivTimeout;

  function expanddsnoyDiv() {
    if (isdsnoyDivEnabled) {
        expanddsnoyDivTimeout = setTimeout(function() {
            const dsnoyDivs = document.querySelectorAll(".dsnoy-div1, .dsnoy-div2, .dsnoy-div3");
            dsnoyDivs.forEach(function(dsnoyDiv) {
                dsnoyDiv.classList.add("show-y");
            });
        }, 1000);
    }
  }
  
  function retractdsnoyDiv() {
    if (isdsnoyDivEnabled) {
        clearTimeout(expanddsnoyDivTimeout);
        const dsnoyDivs = document.querySelectorAll(".dsnoy-div1, .dsnoy-div2, .dsnoy-div3");
        dsnoyDivs.forEach(function(dsnoyDiv) {
            dsnoyDiv.classList.remove("show-y");
        });
    }
  }

   //evcwy divs

function showevcwyDiv() {
    if (isevcwyDivEnabled) {
        const evcwyDivs = document.querySelectorAll(".evcwy-div1, .evcwy-div2, .evcwy-div3");
        evcwyDivs.forEach(function(evcwyDiv) {
            evcwyDiv.classList.add("show-x");
        });
    }
}
  
function hideevcwyDiv() {
    if (isevcwyDivEnabled) {
        const evcwyDivs = document.querySelectorAll(".evcwy-div1, .evcwy-div2, .evcwy-div3");
        evcwyDivs.forEach(function(evcwyDiv) {
          evcwyDiv.classList.remove("show-x");
        });
    }
  }

  let expandevcwyDivTimeout;

  function expandevcwyDiv() {
    if (isevcwyDivEnabled) {
        expandevcwyDivTimeout = setTimeout(function() {
            const evcwyDivs = document.querySelectorAll(".evcwy-div1, .evcwy-div2, .evcwy-div3");
            evcwyDivs.forEach(function(evcwyDiv) {
                evcwyDiv.classList.add("show-y");
            });
        }, 1000);
    }
  }
  
  function retractevcwyDiv() {
    if (isevcwyDivEnabled) {
        clearTimeout(expandevcwyDivTimeout);
        const evcwyDivs = document.querySelectorAll(".evcwy-div1, .evcwy-div2, .evcwy-div3");
        evcwyDivs.forEach(function(evcwyDiv) {
            evcwyDiv.classList.remove("show-y");
        });
    }
  }

     //gsvx divs

function showgsvxDiv() {
    if (isgsvxDivEnabled) {
        const gsvxDivs = document.querySelectorAll(".gsvx-div1, .gsvx-div2, .gsvx-div3");
        gsvxDivs.forEach(function(gsvxDiv) {
            gsvxDiv.classList.add("show-x");
        });
    }
}
  
function hidegsvxDiv() {
    if (isgsvxDivEnabled) {
        const gsvxDivs = document.querySelectorAll(".gsvx-div1, .gsvx-div2, .gsvx-div3");
        gsvxDivs.forEach(function(gsvxDiv) {
          gsvxDiv.classList.remove("show-x");
        });
    }
  }

  let expandgsvxDivTimeout;

  function expandgsvxDiv() {
    if (isgsvxDivEnabled) {
        expandgsvxDivTimeout = setTimeout(function() {
            const gsvxDivs = document.querySelectorAll(".gsvx-div1, .gsvx-div2, .gsvx-div3");
            gsvxDivs.forEach(function(gsvxDiv) {
                gsvxDiv.classList.add("show-y");
            });
        }, 1000);
    }
  }
  
  function retractgsvxDiv() {
    if (isgsvxDivEnabled) {
        clearTimeout(expandgsvxDivTimeout);
        const gsvxDivs = document.querySelectorAll(".gsvx-div1, .gsvx-div2, .gsvx-div3");
        gsvxDivs.forEach(function(gsvxDiv) {
            gsvxDiv.classList.remove("show-y");
        });
    }
  }

      //uskg divs

function showuskgDiv() {
    if (isuskgDivEnabled) {
        const uskgDivs = document.querySelectorAll(".uskg-div1, .uskg-div2, .uskg-div3");
        uskgDivs.forEach(function(uskgDiv) {
            uskgDiv.classList.add("show-x");
        });
    }
}
  
function hideuskgDiv() {
    if (isuskgDivEnabled) {
        const uskgDivs = document.querySelectorAll(".uskg-div1, .uskg-div2, .uskg-div3");
        uskgDivs.forEach(function(uskgDiv) {
          uskgDiv.classList.remove("show-x");
        });
    }
  }

  let expanduskgDivTimeout;

  function expanduskgDiv() {
    if (isuskgDivEnabled) {
        expanduskgDivTimeout = setTimeout(function() {
            const uskgDivs = document.querySelectorAll(".uskg-div1, .uskg-div2, .uskg-div3");
            uskgDivs.forEach(function(uskgDiv) {
                uskgDiv.classList.add("show-y");
            });
        }, 1000);
    }
  }
  
  function retractuskgDiv() {
    if (isuskgDivEnabled) {
        clearTimeout(expanduskgDivTimeout);
        const uskgDivs = document.querySelectorAll(".uskg-div1, .uskg-div2, .uskg-div3");
        uskgDivs.forEach(function(uskgDiv) {
            uskgDiv.classList.remove("show-y");
        });
    }
  }

  

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   document.querySelector(".item.a").addEventListener("mouseenter", event => {
//     let iterations = 0;
//     const interval = setInterval(() => {
//         document.querySelector(".cicw-section .cicw-div1 span").innerText = document.querySelector(".cicw-section .cicw-div1 span").innerText.split("")
//     .map((letter, index) => {
//         if(index < iterations) {
//         return document.querySelector(".cicw-section .cicw-div1 span").dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//     })
//     .uskg("");

//     if(iterations >= document.querySelector(".cicw-section .cicw-div1 span").dataset.value.length){ 
//         clearInterval(interval);
//     }
//     iterations += 1 / 3;
// }, 30);
// });

// document.querySelector(".item.a").addEventListener("mouseleave", event => {
//     let iterations = document.querySelector(".cicw-section .cicw-div1 span").dataset.value.length;
//     const interval = setInterval(() => {
//       document.querySelector(".cicw-section .cicw-div1 span").innerText = document.querySelector(".cicw-section .cicw-div1 span").innerText.split("")
//         .map((letter, index) => {
//           if(index < iterations) {
//             return document.querySelector(".cicw-section .cicw-div1 span").dataset.value[index];
//           }
//           return letters[Math.floor(Math.random() * 26)]
//         })
//         .uskg("");
  
//       if(iterations <= 0){ 
//         clearInterval(interval);
//       }
//       iterations -= 1;
//     }, 5);
//   });