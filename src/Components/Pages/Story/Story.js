import s from './Story.module.scss';
import React, { useEffect, useState } from 'react';
import GeneralHero from './../../GeneralHero/GeneralHero';
import heroImage from './../../../assets/generalhero_blur.jpg';
import roswellImage from './images/roswell.jpg';
import masonJarImage from './images/mason.png';
import whiskeyImage from './images/whiskey_og.jpg';
import ceoImage from './images/element115-ceo.jpg';
import barnImage from './images/barn.jpg';
import ufoImage from './images/ufo.png';
import cow from './images/cow.png';

function Story() {
  const [scrollY, setScrollY] = useState(0);
  const [reachedBottom, setReachedBottom] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);

    if(window.scrollY > 2000 && !reachedBottom) {
      setReachedBottom(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftColumnItems = [
    {
      type: 'image',
      backgroundImage: `url(${roswellImage})`
    },
    {
      type: 'detail',
      header: '1999',
      bodyText: "Emerging from the shadows of captivity, Distillix is embraced by a kind-hearted farmer in the quaint town of Whispering Pines. Here, Distillix encounters humanity's penchant for alcohol. Intrigued and inspired, he embarks on a quest to craft the ultimate brew. Melding exotic ingredients from his home galaxy with the rich bounty of the Earth, he experiments tirelessly."
    },
    {
      type: 'image',
      backgroundImage: `url(${masonJarImage})`
    },
    {
      type: 'detail',
      header: '2019',
      bodyText: "The universe witnesses the birth of a new sensation: Element 115 Whiskey Co. At its heart lies the mysterious Element 115, the cosmic ingredient that bestows upon the drink its unparalleled flavor and euphoric essence."
    },
    {
      type: 'image',
      backgroundImage: `url(${ceoImage})`
    }
  ];

  const rightColumnItems = [
    {
      type: 'detail',
      header: '1947',
      bodyText: "In a cosmic twist of fate, Distillix, the spirited CEO of Element 115 Whiskey Co., finds himself crash-landing on Earth after a tipsy joyride through the galaxies. The FBI, intrigued by this otherworldly visitor, swiftly takes him into custody, confining him to the enigmatic depths of Area 51 for over five decades."
    },
    {
      type: 'image',
      backgroundImage: `url(${barnImage})`
    },
    {
      type: 'detail',
      header: '2012',
      bodyText: "After years of meticulous crafting, Distillix unveils his prototype whiskey to a select group of human confidantes. The response is unanimous: it's celestial! Recognizing the potential of his interstellar elixir, Distillix collaborates with renowned Earthly distilleries to amplify his production."
    },
    {
      type: 'image',
      backgroundImage: `url(${whiskeyImage})`
    },
    {
      type: 'detail',
      header: '2023',
      bodyText: 'The stars align as Distillix releases the inaugural batches of Element 115 Whiskey to an eager public. Distillix gains universal popularity and is known to all of the universe as the best master distiller who ever existed.'
    }
  ];

  const mobileItems = [
    {
      title: '1947',
      image: roswellImage,
      bodyText: "In a cosmic twist of fate, Distillix, the spirited CEO of Element 115 Whiskey Co., finds himself crash-landing on Earth after a tipsy joyride through the galaxies. The FBI, intrigued by this otherworldly visitor, swiftly takes him into custody, confining him to the enigmatic depths of Area 51 for over five decades."
    },
    {
      title: '1999',
      image: barnImage,
      bodyText: "Emerging from the shadows of captivity, Distillix is embraced by a kind-hearted farmer in the quaint town of Whispering Pines. Here, Distillix encounters humanity's penchant for alcohol. Intrigued and inspired, he embarks on a quest to craft the ultimate brew. Melding exotic ingredients from his home galaxy with the rich bounty of the Earth, he experiments tirelessly."
    },
    {
      title: '2012',
      image: masonJarImage,
      bodyText: "After years of meticulous crafting, Distillix unveils his prototype whiskey to a select group of human confidantes. The response is unanimous: it's celestial! Recognizing the potential of his interstellar elixir, Distillix collaborates with renowned Earthly distilleries to amplify his production."
    },
    {
      title: '2019',
      image: whiskeyImage,
      bodyText: 'The universe witnesses the birth of a new sensation: Element 115 Whiskey Co. At its heart lies the mysterious Element 115, the cosmic ingredient that bestows upon the drink its unparalleled flavor and euphoric essence.'
    },
    {
      title: '2023',
      image: ceoImage,
      bodyText: 'The stars align as Distillix releases the inaugural batches of Element 115 Whiskey to an eager public. Distillix gains universal popularity and is known to all of the universe as the best master distiller who ever existed.'
    },
  ];

  const renderDetailItem = (props) => {

    const {
      header,
      bodyText,
      key,
      id,
      animationClass
    } = props;

    return (
      <div 
        className={`${s.detailItem} ${animationClass}`} 
        key={key} 
        id={s[id]}
        style={{ 
          display: toggleItemVisibilty(id)
        }}
      >
        <div className={s.detailItemContent}>
          <div className={s.header}>
            <h2>{header}</h2>
          </div>

          <div className={s.detailText}>
            <p>{bodyText}</p>
          </div>
        </div>
      </div>
    );
  }

  const renderImageItem = (props) => {
    const {
      backgroundImage,
      key,
      id,
      animationClass,
    } = props;

    return (
      <div 
        className={`${s.imageItem} ${animationClass}`}
        style={{ 
          backgroundImage: backgroundImage,
          display: toggleItemVisibilty(id)
        }}
        key={key}
        id={s[id]}
      >
      </div>
    )
  }

  const renderMobileItems = (props) => {

    const {
      title,
      image,
      bodyText,
      key
    } = props;

    return (
      <div className={s.mobileRowItem} key={key}>
        <div className={s.mobileHeader}>
          <h3>{title}</h3>
        </div>

        <div 
          className={s.mobileImageContainer}
          style={{ backgroundImage: `url(${image})`}}
        >

        </div>

        <div className={s.mobileTextContainer}>
          <p>{bodyText}</p>
        </div>
      </div>
    )
  }

  const toggleItemVisibilty = (id) => {

    if(reachedBottom) {
      return 'flex';
    } else if(scrollY > 150 && (id === 'leftColItem-0' || id === 'rightColItem-0')) {
      return 'flex';
    } else if(scrollY > 650 && (id === 'leftColItem-1' || id === 'rightColItem-1')) {
      return 'flex';
    } else if(scrollY > 1000 && (id === 'leftColItem-2'|| id === 'rightColItem-2')) {
      return 'flex';
    } else if(scrollY > 1500 && (id === 'leftColItem-3' || id === 'rightColItem-3')) {
      return 'flex'
    } else if(scrollY > 1900 && (id === 'leftColItem-4' || id === 'rightColItem-4')) {
      return 'flex';
    }
  }

  const ufoPosition = () => {
    if(scrollY > 333 && scrollY < 2001) {
      return { top: `${scrollY -170}px` };
    } else if(scrollY > 2000) {
      return { top: '2160px' };
    }

    return null;
  }
  
  return (
    <section className={`animate__animated animate__fadeIn`}>
      <GeneralHero
        image={heroImage}
        title={'Story'}
      />
      {/* <p className={s.debug}>Vertical Scroll Position: {scrollY}px.</p> */}
      
      <div className='row'>
        <div className={`${s.timelineContainer} container`}>

          {/* left column content container */}
          <div className={s.leftCol}>
            {/* Dynamically render components based on items stored in 
              leftColumnItems array.
            */}
            {
              leftColumnItems.map((x, key) => {
                if(x.type == 'image') {
                  return renderImageItem({
                    backgroundImage: x.backgroundImage,
                    key,
                    id: `leftColItem-${key}`,
                    animationClass: 'animate__animated animate__fadeInLeft'
                  });
                } else {
                  return renderDetailItem({
                    header: x.header,
                    bodyText: x.bodyText,
                    key,
                    id: `leftColItem-${key}`,
                    animationClass: 'animate__animated animate__fadeInUp'
                  });
                }
              })
            }

            {/* end of column container */}
          </div>

          {/* Middle UFO column */}
          <div className={s.midCol}>
            <div 
              className={s.ufo} 
              style={ufoPosition()}
            >
              <img 
                src={ufoImage} 
                className='animate__animated animate__zoomInUp' 
              />
            </div>

            <div className={s.cow}>
              <img src={cow} />
            </div>
          </div>
          
          {/* Right column container */}
          <div className={s.rightCol}>
            {
              rightColumnItems.map((x, key) => {
                if(x.type == 'image') {
                  return renderImageItem({
                    backgroundImage: x.backgroundImage,
                    key,
                    id: `rightColItem-${key}`,
                    // display: toggleItemVisibilty(`rightColItem-${key}`),
                    animationClass: 'animate__animated animate__fadeInRight',
                  });
                } else {
                  return renderDetailItem({
                    header: x.header,
                    bodyText: x.bodyText,
                    key,
                    id: `rightColItem-${key}`,
                    // display: toggleItemVisibilty(`rightColItem-${key}`),
                    animationClass: 'animate__animated animate__fadeInUp',
                  });
                }
              })
            }
          {/* End of right column container */}
          </div>

        </div>

        {/* Mobile timeline container */}
        <div className={s.timelineMobileContainer}>
          {
            mobileItems.map((x, key) => {
              return renderMobileItems({
                title: x.title,
                image: x.image,
                bodyText: x.bodyText,
                key
              });
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Story;
