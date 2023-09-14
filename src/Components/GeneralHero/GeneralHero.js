import s from './GeneralHero.module.scss';

function GeneralHero(props) {

  // TODO: Replace background image with prop variable. 
  // Use prop for banner text

  // Defined props 
  const {
    title,
    image
  } = props;

  return (
    <div 
      className={s.generalHeroContainer} 
      style={{ backgroundImage: `url(${image})`}}
    >
      <div className={s.bannerText}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GeneralHero;
