import React from 'react';
import s from './HeroBanner.module.scss';
import HeroLogo from './../../assets/new115-logo.png';

const HeroBanner = () => {
  return (
    <section className={s.heroBanner}>
      <div className={s.heroBackground}></div>
      <div className={s.heroContent}>
        <div className={`${s.heroLogo} animate__animated animate__fadeInDown`}>
          <img src={HeroLogo} alt="Logo image with sub-headline that reads 'Element 115 whiskey Co. - Made by aliens for humans.'" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
