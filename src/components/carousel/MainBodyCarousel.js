import React from "react";
import Slider from "react-slick";
import "./MainBodyCarousel.scss";

import ShowtimeLogo from "../../assets/showtime_logo.png";

const MainBodyCarousel = () => {
  var settings = {
		autoplay: true,
		arrows: false,
		dots: true,
		infinite: true,
		autoplaySpeed: 4000,
		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
  return (
    <Slider className="main-body-carousel" {...settings}>

      <div className="brand-container d-md-flex align-items-center">
        <div className="brand-image mx-md-4 my-3">
          <img src={ShowtimeLogo} alt="brand-logo" />
        </div>
        <div className="paragraph">
          <p>
            Ut dignissim tellus vel nisi bibendum, in hendrerit quam rutrum.
            Fusce sollicitudin pulvinar libero, at scelerisque elit mattis sit
            amet.
          </p>
        </div>
      </div>

      <div className="brand-container d-md-flex align-items-center">
        <div className="brand-image mx-md-4 my-3">
          <img src={ShowtimeLogo} alt="brand-logo" />
        </div>
        <div className="paragraph">
          <p>
            Ut dignissim tellus vel nisi bibendum, in hendrerit quam rutrum.
            Fusce sollicitudin pulvinar libero, at scelerisque elit mattis sit
            amet.
          </p>
        </div>
      </div>

      <div className="brand-container d-md-flex align-items-center">
        <div className="brand-image mx-md-4 my-3">
          <img src={ShowtimeLogo} alt="brand-logo" />
        </div>
        <div className="paragraph">
          <p>
            Ut dignissim tellus vel nisi bibendum, in hendrerit quam rutrum.
            Fusce sollicitudin pulvinar libero, at scelerisque elit mattis sit
            amet.
          </p>
        </div>
      </div>

      <div className="brand-container d-md-flex align-items-center">
        <div className="brand-image mx-md-4 my-3">
          <img src={ShowtimeLogo} alt="brand-logo" />
        </div>
        <div className="paragraph">
          <p>
            Ut dignissim tellus vel nisi bibendum, in hendrerit quam rutrum.
            Fusce sollicitudin pulvinar libero, at scelerisque elit mattis sit
            amet.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default MainBodyCarousel;
