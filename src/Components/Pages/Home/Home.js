import s from './Home.module.scss';
import HeroBanner from '../../HeroBanner/HeroBanner';
import fireIcon from '../../../assets/fire.png';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow/Slideshow';
import ColumnSwitcher from './ColumnSwitcher/ColumnSwitcher';
import React, { useEffect } from 'react';
import award1 from './../../../assets/award_1.png';
import award2 from './../../../assets/award_2.png';
import award3 from './../../../assets/award_3.png';

function Home() {
  useEffect(() => {
      window.scrollTo(0, 0); // Reset scroll position to top
  }, []);


  return (
    <section className={`animate__animated animate__fadeIn`}>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Text row */}
      <div className='row row--secondaryBg'>
        <div className='container'>
          <div className='row__centerContent'>
            <h2 className='row__header'>Enhanced Alien Whiskey</h2>
            <p className='row__textContent'>Welcome to the next frontier of whiskey innovation: Element 115 Whiskey Co. Imagine a world where the finest grains from Earth's Scottish Highlands merge with the mystique of outer space, embodied in the elusive Element 115. It's an alchemy of traditional craftsmanship and cosmic wizardry, creating a flavor profile so extraordinary, it's otherworldly. Sip, savor, and journey through the cosmos—all from the comfort of your glass.</p>
            <div className='row__icon'>
              <i className={`bi bi-fire ${s.fireIcon}`}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Gif row */}
      <div className={s.gifContainer}>
        <div className={s.gifContainer__textContent}>
          <h2>ELEMENT 115 Whiskey <br></br>is brewed in space.</h2>
          <div className={s.ctaBtn__container}>
            <Link to='/process'>
              <Button colorScheme='white' variant='outline' className={s.ctaBtn}>
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slideshow  */}
      <Slideshow />

      {/* Column Switcher */}
      <ColumnSwitcher />

      {/* Awards row */}
      <div className={`row ${s.awardsRow}`}>
        <div className='container'>
          <div className={`row__centerContent ${s.awardsContent}`}>
            <h2 className='row__header'>Element 115 is one of the top 10 whiskeys in the universe</h2>
            <p className='row__textContent'>
              Awarded as one of the best whiskey brands across the entire universe.
            </p>
            <div className='row__icon'>
              <div className={s.awardIconContainer}>
                <img src={award1} />
                <img src={award2} />
                <img src={award3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
