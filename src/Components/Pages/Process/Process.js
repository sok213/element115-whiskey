import s from './Process.module.scss';
import GeneralHero from './../../GeneralHero/GeneralHero';
import heroImage from './../../../assets/clock.jpg';
import React, { useState, useEffect } from 'react';
import schematics from './../../../assets/schematics.jpg';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.accordionItem}>
      <button className={s.accordionTitle} onClick={toggleAccordion}>
        {title}
        {
          isOpen ? 
          <i className="bi bi-chevron-up"></i> :
          <i className="bi bi-chevron-down"></i>
        }
      </button>
      <div className={`${s.accordionContent} ${isOpen ? s.openItem : null}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className={s.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: 'Stage 1: The Astro-Mashing Stage',
    content: "At the Upsilon Space Station, we kick off the brewing with barley and spring water from Earth's Scottish Highlands. Inside our Zero-G Mash Tun, set to a room temperature of absolute zero, we introduce Element 115. This rare alien element gives our whiskey a cosmic kick and a flavor of interstellar mystery.",
  },
  {
    title: 'Stage 2: The Wormhole Fermentation',
    content: 'We transfer the wort to our Wormhole Fermenters made of dark matter and lined with quasar fragments. Fermentation is supercharged by yeast from the moons of Zogar and the time-bending powers of the wormhole. Element 115 interacts with the yeast, sparking trans-dimensional enzymatic reactions for an incomparable taste.',
  },
  {
    title: 'Stage 3: Galactic Maturation & Bottling',
    content: `The liquid ambrosia ages in Galactic Barrels from sacred Grooblian Trees, all while orbiting a black hole to accelerate maturation. A day here equals a decade on Earth, allowing the whiskey to develop a rich, multidimensional flavor. Finally, it's bottled in anti-gravity flasks with a final dash of Element 115, ready for your transcendent enjoyment.

    Cheers, or "Glarbtok!" as we say in space`
  }
];

function Process() {
  useEffect(() => {
      window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  return (
    <section className={`animate__animated animate__fadeIn`}>
      <GeneralHero
        image={heroImage}
        title={'Process'}
      />

      {/* Text row */}
      <div className='row'>
        <div className='container'>
          <div className='row__centerContent'>
            <h2 className='row__header'>Space Liquor Engineering</h2>
            <p className='row__textContent'>From Scottish Barley to Cosmic Bliss: <br></br>Where Earth Meets Element 115</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className={`container ${s.processContainer}`}>
          <div className={s.leftCol}>
            <div className={s.accordionHeader}>
              <h2>Discover what goes into the brew process of Element 115 Whiskey</h2>
            </div>
            <p>Welcome to the mysterious and marvelously whimsical world of Element 115 Whiskey. Ever wondered what happens when Scottish tradition meets cosmic innovation? Fasten your seatbelts and put on your anti-gravity boots, because you're about to journey through a brewing process that transcends both time and space. From the depths of Earth's Scottish Highlands to the outer reaches of the Upsilon Space Station, here's how we create the most extraordinary whiskey in the galaxy, complete with a dash of alien magic—Element 115.</p>
            <Accordion items={accordionItems} />
          </div>
          <div className={s.rightCol}>
            <img src={schematics} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
