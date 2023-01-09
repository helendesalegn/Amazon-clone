import React from 'react'
import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom';
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="home__image"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <img
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ADuctFC2L._SX3000_.jpg"
              alt="Amazom_Image"
            />
          </div>

          <div>
            <img
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61uB-dt-RWL._SX3000_.jpg"
              alt="Amazom_Image"
            />
          </div>

          <div>
            <img
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg"
              alt="Amazom_Image"
            />
          </div>

          <div>
            <img
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71tIrZqybrL._SX3000_.jpg"
              alt="Amazom_Image"
            />
          </div>
        </Carousel>
      </div>
      <div className="home__row__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="All-New Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Deep Sea Blue"
            price={34.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41uzOon1zXL._AC_.jpg"
          />
          <Product
            id="49538094"
            title="Govee Envisual TV LED Backlights with Camera, DreamView T1 RGBIC Wi-Fi TV Backlights for 55-65 inch TVs PC, Works with Alexa & Google Assistant, App Control, Music Sync TV Lights, Adapter, H6199"
            price={239.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51GuwTAPkIL._AC_SY580_DpWeblab_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/51lbDYjY0HL._AC_UF452,452_FMjpg_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/41lqj0ob7iL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/51ahiTm44IL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={2}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71gvpZYgPxS._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/31gJ-BK4BbL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/51lSazDFCZL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={2}
            image="https://m.media-amazon.com/images/I/31kaMtbUBEL._AC_UF452,452_FMjpg_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
