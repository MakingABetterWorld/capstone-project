import chefimage2 from './assets/chefimage2.jpg';
import chefimage1 from './assets/chefimage1.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Little Lemon was conceptualized in 2019, when we had the great idea of sharing some of the delicious recipes from Greek and Turkish Cuisine with the public.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefimage2} alt="Chefs Mario and Adrian" />
        <img src={chefimage1} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
