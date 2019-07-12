import React from "react";
import Swiper from "react-id-swiper";
import "swiper/dist/css/swiper.css";

const params = {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnIteration: false
  },
  slidesPerView: 5,
  spaceBetween: 30
};

const Partners = () => {
  return (
    <section class="section">
      <div class="container py-5 border-bottom">
        <Swiper {...params}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div class="swiper-slide">
              <img
                src={require(`assets/img/logos/${i}.png`)}
                class="img-responsive"
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
