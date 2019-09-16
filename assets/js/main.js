/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    xlarge: ["1141px", "1680px"],
    large: ["981px", "1140px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["321px", "480px"],
    xxsmall: [null, "320px"]
  });

  // Play initial animations on page load.
  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);
  });

  const particlesJSON = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  particlesJS("particles-js", particlesJSON);

  // Scrolly.
  $(".scrolly").scrolly();
})(jQuery);
