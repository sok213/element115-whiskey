import s from './ColumnSwitcher.module.scss';
import React, { useState, Fragment } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import eventsImage1 from './../../../../assets/events_1.jpg';
import eventsImage2 from './../../../../assets/events_2.jpg';
import eventsImage3 from './../../../../assets/events_3.jpg';
import lifestyleImage1 from './../../../../assets/lifestyle_1.jpg';
import lifestyleImage2 from './../../../../assets/lifestyle_2.jpg';
import lifestyleImage3 from './../../../../assets/lifestyle_3.jpg'
import tasteImage1 from './../../../../assets/taste_1.jpg';
import tasteImage2 from './../../../../assets/taste_2.jpg';
import tasteImage3 from './../../../../assets/taste_3.jpg';

function ColumnSwitcher() {

  const [activeCategory, setActiveCategory] = useState(0);

  const eventsContent = [
    {
      thumbnail: eventsImage1,
      title: 'Cosmic Beats Music Festival: Groove to Galactic Tunes',
      detail: "Make your music festival an interstellar event that transcends dimensions with Element 115 Whiskey. As the bass drops and stars align, elevate the vibe by passing around our anti-gravity flasks. You're not just dancing—you're floating through the cosmos!"
    },
    {
      thumbnail: eventsImage2,
      title: 'Corporate Galactic Mixers: Network at the Speed of Light',
      detail: "Make your next corporate event the talk of the multi-verse by featuring Element 115 Whiskey. Elevate your networking from mere handshakes to sharing a glass that's been aged by the gravitation of a black hole."
    },
    {
      thumbnail: eventsImage3,
      title: 'Cosmic Birthdays: A New Spin on a Year Older',
      detail: 'Celebrate the passage of time with a whiskey that has transcended it! Element 115 Whiskey is the ultimate twist for your birthday bash, offering guests a sip of a millennia-aged elixir as you blow out your candles.'
    }
  ];

  const lifestyleContent = [
    {
      thumbnail: lifestyleImage1,
      title: 'Elevate Your Social Circles—To the Stratosphere!',
      detail: "A bottle of Element 115 Whiskey isn't just a drink; it's a social event catalyst, propelling your dinner parties straight into another galaxy. With a holographic label and anti-gravity flask, it's the conversation starter that transcends earthly chit-chat."
    },
    {
      thumbnail: lifestyleImage3,
      title: 'The Ultimate Adventure Companion: Beyond Earth and Mars',
      detail: "Pack Element 115 Whiskey for your next space expedition and elevate your adventurer status to cosmic pioneer. Certified for interstellar travel, it's the whiskey that thrives where oxygen can't."
    },
    {
      thumbnail: lifestyleImage2,
      title: "Connoisseur's Choice: The Future of Vintage",
      detail: "Forget decades-old Scotch; Element 115 Whiskey matures for millennia thanks to our Galactic Barrels orbiting a time-stretching black hole. It's the connoisseur's choice for a taste so complex, you'll think you've sipped a nebula."
    }
  ];

  const tasteContent = [
    {
      thumbnail: tasteImage1,
      title: 'Highland Heritage: Barley with a Cosmic Twist',
      detail: "At the core of Element 115 Whiskey is premium barley sourced from Earth's Scottish Highlands. This isn't just any barley—it's the bedrock of our flavor profile, providing an earthy, robust foundation that perfectly harmonizes with the interstellar magic of Element 115."
    },
    {
      thumbnail: tasteImage2,
      title: 'Crystal Waters: Earthly Purity Meets Galactic Innovation',
      detail: "Our whiskey boasts the freshest and most mineral-rich waters from Earth's Scottish Highlands, further purified by top-secret cosmic technology. The result? A liquid base so clear and refreshing, it's like sipping from a mountain stream in a galaxy far, far away."
    },
    {
      thumbnail: tasteImage3,
      title: 'Millennia-Barrels: Timeless Aging, Universal Quality',
      detail: "Our Galactic Barrels are crafted from million-year-old trees harvested from the freshest and oldest forests of a distant planet. These aren't just barrels; they're time capsules that infuse our whiskey with unparalleled depth, complexity, and a taste as timeless as the universe itself."
    }
  ];

  const activeCategoryCtaStyle = { backgroundColor: 'greenyellow', color: '#24343F' };

  const renderColumns = () => {

    const categoryItems = [
      eventsContent,
      lifestyleContent,
      tasteContent
    ];

    return (
      <div className={s.columnContainer}>
        {
          categoryItems[activeCategory].map(i => {
            return (
              <Fragment>
                {/* Column item  */}
                <div className={s.columnItem}>


                  <div 
                    className={s.columnItem__image} 
                    style={{ backgroundImage: `url(${i.thumbnail})`}}
                  >
                  </div>

                  <div className={s.columnItem__text}>
                    <p className={s.columnItem__title}>
                      {i.title}
                    </p>

                    <p className={s.columnItem__detail}>
                      {i.detail}
                    </p>
                  </div>
                </div>
                {/* End of column item */}
              </Fragment>
            )
          })
        }
      </div>
    );
  }

  return (
    <div className='row row--gradientBG'>
      <div className='container'>

        <div className={s.contentContainer}>
          <div className={s.columnController}>
            <div className={s.columnController__Items}>
              <ButtonGroup variant='outline' spacing='6'>
                <Button 
                  onClick={() => setActiveCategory(0)} 
                  style={activeCategory === 0 ? activeCategoryCtaStyle : null}
                >
                    Events
                </Button>
                <Button 
                  onClick={() => setActiveCategory(1)}
                  style={activeCategory === 1 ? activeCategoryCtaStyle : null}  
                >
                  Lifestyle
                </Button>
                <Button 
                  onClick={() => setActiveCategory(2)}
                  style={activeCategory === 2 ? activeCategoryCtaStyle : null}
                >
                  Taste
                </Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Render 3 column items corresponding to active category */}
          {renderColumns()}
        </div>
      </div>
    </div>
  )
}

export default ColumnSwitcher;