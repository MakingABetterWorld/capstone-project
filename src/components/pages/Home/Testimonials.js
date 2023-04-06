import customer1Image from './assets/testimo1.jpg';
import customer2Image from './assets/testimo2.jpg';
import customer3Image from './assets/testimo3.jpg';
import customer4Image from './assets/testimo4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Steven Rock',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `WOW!!! What an outstanding dinner you prepared at the Little Lemon on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift!`,
  },
  {
    fullName: 'Andy Scott',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The food, service, ambience and more was all superb!!! On behalf of us all, fight on!

    Cheers!`,
  },
  {
    fullName: 'Tamalina Jane',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I just wanted to let you know that I had one of the best dinners of my life last night…. at your restaurant!!`,
  },
  {
    fullName: 'Donny Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `My birthday party was better and even more “delicious” than I had hoped. Staff made everyone feel at home as soon as they walked in the door. I can’t thank you enough for allowing us to use the restaurant instead of having the party at my home. It was a memorable occasion for all of us.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
