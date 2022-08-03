import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import Image1 from "./assets/image-1-final.png";
import Image2 from "./assets/image-2-final.png";
import Image3 from "./assets/image-3-final.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [Image1, Image2, Image3];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    cssEase: "linear",
    /* nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, */
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
