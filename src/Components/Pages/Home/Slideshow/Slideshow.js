import s from './Slideshow.module.scss';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import slideImage1 from './slideImages/jack_D.png';
import slideImage3 from './slideImages/fireplace.jpg';
import slideImage4 from './slideImages/dusty_whiskey.jpg';
import slideImage5 from './slideImages/hq.jpg';

function Slideshow() {

  const [activeSlide, setActiveSlide] = useState(0);

  const slideImageBank = [
    'image 1',
    'image 2',
    'image 3',
    'image 4'
  ];

  const prevSlide = () => {

    if(activeSlide == 0) {
      setActiveSlide(slideImageBank.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  const nextSlide = () => {

    // Checks to see if active slide is the last index of the image bank.
    // If it is, go back to index 1, if not, go to next index.
    if((activeSlide + 1) == slideImageBank.length) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }

    // SetTimeout for 1 second to toggle display.
  }

  const setIndicatorColor = (key) => {
    if(key == activeSlide) {
      return {
        backgroundColor: "#F19A17"
      }
    }
  }

  const slideTextContent = [
    {
      upperHeader: 'Unparalleled Distinction',
      bodyContent: "What sets Element 115 Whiskey apart from your run-of-the-mill earthly spirits? It's all in the name: Element 115. This enigmatic alien ingredient imbues our whiskey with transcendent qualities, elevating it to a complexity and smoothness that mere Earth-bound distilleries could only dream of. It's not just whiskey; it's the nectar of the cosmos.",
      bottomHeader: 'The Element 115 Edge',
      image: slideImage1,
      ctaLink: '/process'
    },
    {
      upperHeader: 'Upsilon Space Station',
      bodyContent: 'Where is the magic brewed? None other than the Upsilon Space Station, a state-of-the-art facility orbiting in a top-secret location within the asteroid belt. With zero-gravity fermentation chambers and space-time distillation units, the station is a citadel of innovation, weaving earthly tradition and cosmic science into every drop.',
      bottomHeader: 'The Cradle of Cosmic Libations',
      image: slideImage5,
      ctaLink: false
    },
    {
      upperHeader: 'Sip, Mix, Soar',
      bodyContent: "Enjoy Element 115 Whiskey in a multitude of celestial ways. While it's exquisite on the rocks or as the star of a cosmic cocktail, we highly recommend adding a splash to your hot coffee during winter months. It’s like having a cozy, interstellar fireplace right in your mug.",
      bottomHeader: 'The Versatility of Element 115 Whiskey',
      image: slideImage3,
      ctaLink: '/products'
    },
    {
      upperHeader: 'Premium Terrestrial Meets Universal Rarity',
      bodyContent: "We believe in the sacred marriage of earthly and extraterrestrial ingredients. That's why we use only the freshest and highest quality barley and water from the Scottish Highlands. These elements harmonize perfectly with the rarest raw materials gathered from across the universe, making each bottle a cosmological treasure of unparalleled quality.",
      bottomHeader: 'Ingredient Philosophy',
      image: slideImage4,
      ctaLink: '/story'
    }
  ]

  return (
    <div className='row'>
      <div className='container'>
        <div className={s.slideshow__container}>

          <div className={`${s.slideshow__outerContainer} ${s.slideshow__panelBox}`}>
            {/* Slidehow controller panel */}
            <div className={s.slideshow__infoPanel}>

              {/* Top panel container */}
              <div className={s.slideshow__topPanel}>
                <div className={s.leftCol}>
                  <button onClick={prevSlide}>
                    <i className={`${s.chevronIcon} bi bi-chevron-left`}></i>
                  </button>
                </div>


                <div className={s.slideshow__infoPanel__centerContent}>
                  <p className={s.topHeader}>
                    {slideTextContent[activeSlide].upperHeader}
                  </p>

                  <h3>{slideTextContent[activeSlide].bottomHeader}</h3><br></br>
                  <p className={s.slideShowContent}>{slideTextContent[activeSlide].bodyContent}</p><br></br>
                  {
                    slideTextContent[activeSlide].ctaLink &&
                    <Link to={slideTextContent[activeSlide].ctaLink}>
                      <Button colorScheme='green' >
                        Learn more
                      </Button>
                    </Link>
                  }
                </div>

                <div className={s.rightCol}>
                  <button onClick={nextSlide}>
                    <i className={`${s.chevronIcon} bi bi-chevron-right`}></i>
                  </button>
                </div>

              {/* End of top panel container */}
              </div>
            
            {/* End of slideshow controller panel */}
            </div>
            <div className={s.activeSlideIndicator}>
              {slideImageBank.map((i, key) => {
                return (
                  <div 
                    key={key}
                    className={s.indicatorItem} 
                    style={setIndicatorColor(key)}
                  >
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slideshow image panel */}
          <div 
            className={`${s.slideshow__imagePanel} ${s.slideshow__panelBox} animate__animated animate__fadeIn`} 
            style={{backgroundImage: `url(${slideTextContent[activeSlide].image})`}}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;