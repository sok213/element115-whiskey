import s from './Headquarters.module.scss';
import React, { useEffect } from 'react';
import GeneralHero from './../../GeneralHero/GeneralHero';
import heroImage from './../../../assets/generalhero_blur.jpg';

function Headquarters() {
  useEffect(() => {
      window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  return (
    <section className={`animate__animated animate__fadeIn`}>
      <GeneralHero
        image={heroImage}
        title={'Headquarters'}
      />
      <div className='row'>
        <div className={`container ${s.contactContainer}`}>
          <div className={s.leftCol}>
            <div className={s.textContent}>
              <h2 className={s.header}>S-115 Maximum Secure Distillery (Earth)</h2>
              <p>Nestled deep beneath the enigmatic depths of Area 51 lies the clandestine headquarters for Element 115 Whiskey—a zone so secretive it's been aptly designated as Subsection #115 or "S-115." Here, in this undisclosed sanctum shielded by quantum stealth fields, Element 115 Whiskey undergoes rigorous testing and cosmic stabilization. Once declared fit for human consumption, these interstellar libations are carefully encapsulated and prepared for their earthly debut, following their high-speed voyage from an extraterrestrial shipping facility that orbits a distant quasar.</p>
            </div>
          </div>
          <div className={s.rightCol}>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headquarters;
