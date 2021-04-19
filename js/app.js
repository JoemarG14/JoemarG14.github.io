var logo = document.getElementById("logo");
var homepage_overlay = document.getElementById("homepage-overlay");
var home_sliders = document.querySelectorAll("#home .slide-in");
var home_faders = document.querySelectorAll("#home  .fade-in");

var about_title = document.querySelector(".title .slide-in");
var about_desc = document.querySelector(".content .slide-in");

var images,
    loadedImage = 0;

function preloadImages() {
    images = [
        "img/JGLogo.png",
        "img/joe-crossarm.png"
    ];

    for (var i = 0; i < images.length; i++) {
        var imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)
    }
}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
        
      logo.src = images[0];

      homepage_overlay.style.background = 'linear-gradient(rgba(255, 182, 51, .65),rgba(255, 182, 51, .65)), url("' + images[1] + '")';
      homepage_overlay.style.backgroundRepeat = 'no-repeat';
      homepage_overlay.style.backgroundSize = '115% 103%';
      homepage_overlay.style.backgroundPosition = 'left';

    }

    home_sliders.forEach( slider => {
      setTimeout(function(){ slider.classList.add('appear'); }, 1500);
    })

    home_faders.forEach( fader => {
      fader.classList.add('appear');
    })
    
}

var appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

var appearOnScroll = new IntersectionObserver (function (
  entries,
  appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);


window.addEventListener('scroll', function() {
  var value = window.scrollY;

  about_title.style.left = -value * 1 + 'px';
  about_desc.style.right = -value * 0.76 + 'px';

})


preloadImages();
// for particle.js
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 28,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);