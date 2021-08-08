import EllipseLg from "../assets/ellipse_lg.svg";
import EllipseMd from "../assets/ellipse_md.svg";
import EllipseSm from "../assets/ellipse_sm.svg";

const particlesConfig = {
  particles: {
    number: {
      value: 3,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 1,
      out_mode: "out",
    },
    shape: {
      type: ["image"],
      image: [
        {
          src: `${EllipseLg}`,
          height: 401,
          width: 401,
        },
        {
          src: `${EllipseMd}`,
          height: 329,
          width: 329,
        },
        {
          src: `${EllipseSm}`,
          height: 200,
          width: 200,
        },
      ],
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 300,
        sync: false,
      },
    },
  },
  retina_detect: false,
};

export default particlesConfig;
