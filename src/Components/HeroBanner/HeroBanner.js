import React from 'react';
import s from './HeroBanner.module.scss';
import HeroLogo from './../../assets/logo_large.png';

const HeroBanner = () => {
  return (
    <section className={s.heroBanner}>
      <div className={s.heroBackground}></div>
      <div className={s.heroContent}>
        <div className={`${s.heroLogo} animate__animated animate__fadeInDown`}>
          <img src={HeroLogo} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
