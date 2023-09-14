import s from './Products.module.scss';
import GeneralHero from './../../GeneralHero/GeneralHero';
import heroImage from './../../../assets/generalhero_blur.jpg';
import whiskey_OG from './../../../assets/whiskey_og.jpg';
import whiskey_OG_Mobile from './../../../assets/whiskey_og_mobile.jpg';
import whiskey_Lazar from './../../../assets/whiskey_lazar.jpg';
import whiskey_Lazar_Mobile from './../../../assets/whiskey_lazar_mobile.jpg';
import whiskey_Skinwalker from './../../../assets/whiskey_skinwalker.jpg';
import whiskey_Skinwalker_Mobile from './../../../assets/whiskey_skinwalker_mobile.jpg';
import React, { useState, useEffect } from 'react';


function Products() {

  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 850);

  useEffect(() => {
    function handleResize() {
      setIsNarrow(window.innerWidth <= 850);
    }

    window.scrollTo(0, 0); // Reset scroll position to top
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <section className={`animate__animated animate__fadeIn`}>
      <GeneralHero
        image={heroImage}
        title={'Products'}
      />

      {/* row 1 */}
      <div className='row animate__animated animate__fadeInLeft'>
        <div className={s.productsContainer}>
          <div className={s.columnContainer}>
            <div 
              className={`${s.leftCol} ${s.imageColumn}`}
              style={{ backgroundImage: `url(${whiskey_OG})` }}
            >
            </div>
            <div className={`${s.rightCol} ${s.darkColumn}`}>
              <div 
                className={s.textContainer}
                style={isNarrow ? { backgroundImage: `url(${whiskey_OG_Mobile})`}: null }
              >
                <h2>Element 115: <span style={{ color: '#FF7537' }}>Original</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className='row animate__animated animate__fadeInRight'>
        <div className={s.productsContainer}>
          <div className={s.columnContainer}>
            <div className={`${s.leftCol} ${s.lightColumn}`}>
              <div 
                className={s.textContainer}
                style={isNarrow ? { backgroundImage: `url(${whiskey_Lazar_Mobile})`}: null }
              >
                <h2>Element 115: <span style={{ color: '#4CC64C' }}>Lazar Edition</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div 
              className={`${s.rightCol} ${s.imageColumn}`}
              style={{ backgroundImage: `url(${whiskey_Lazar})` }}
            >
            </div>
          </div>
        </div>
      </div>

      {/* row 3*/}
      <div className='row animate__animated animate__fadeInUp'>
        <div className={s.productsContainer}>
          <div className={s.columnContainer}>
            <div 
              className={`${s.leftCol} ${s.imageColumn}`}
              style={{ backgroundImage: `url(${whiskey_Skinwalker})` }}
            >
            </div>
            <div className={`${s.rightCol} ${s.darkColumn}`}>
              <div 
                className={s.textContainer}
                style={isNarrow ? { backgroundImage: `url(${whiskey_Skinwalker_Mobile})`}: null }
              >
                <h2>Element 115: <span style={{ color: '#8A35F6' }}>Skinwalker Edition</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Products;
