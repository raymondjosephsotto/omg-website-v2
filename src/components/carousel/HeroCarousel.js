import React from "react";
import Slider from "react-slick";

import "./Carousel.scss";

const HeroCarousel = () => {
  var settings = {
		autoplay: true,
		arrows: false,
		dots: true,
		infinite: true,
		autoplaySpeed: 4000,
    speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};
  return (
    <Slider {...settings}>
      <div>
        <div className="heading">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        </div>
        <div className="paragraph pt-3 pt-md-2 pb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div>
        <div className="heading">
          <h1>Orci varius natoque penatibus et magnis</h1>
        </div>
        <div className="paragraph pt-3 pt-md-2 pb-5">
          <p>
            dis parturient montes, nascetur ridiculus mus. Pellentesque iaculis
            magna vel mauris varius luctus. Vivamus elementum id enim a
            pharetra. Praesent molestie eget justo eu hendrerit.
          </p>
        </div>
      </div>
      <div>
        <div className="heading">
          <h1>Vivamus a malesuada dolor,</h1>
        </div>
        <div className="paragraph pt-3 pt-md-2 pb-5">
          <p>
            Cras aliquam, augue et congue pretium, sapien risus commodo odio,
            quis bibendum ipsum lectus rhoncus turpis. Fusce eget maximus ipsum.
          </p>
        </div>
      </div>
      <div>
        <div className="heading">
          <h1>Morbi a nisl purus</h1>
        </div>
        <div className="paragraph pt-3 pt-md-2 pb-5">
          <p>
            Proin vel tortor finibus, volutpat enim pellentesque, euismod
            turpis. Praesent nec rhoncus elit, quis vulputate ipsum. Donec vitae
            lorem at lacus ultricies laoree
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default HeroCarousel;
