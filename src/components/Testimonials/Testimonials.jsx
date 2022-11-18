import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import css files
import "slick-carousel/slick/slick-theme.css"; // Import css files

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, explicabo.'
  },
  {
    avatar: AVTR2,
    name: 'LeTs Gray',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, explicabo.'
  },
  {
    avatar: AVTR3,
    name: 'Imagin Sway',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, explicabo.'
  },
  {
    avatar: AVTR4,
    name: 'Fula Tini',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, explicabo.'
  }
];


const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id='testimonials'>
      <h5>What Clients say about my work ?</h5>
      <h2>Testimonials</h2>

      <Slider className='container testimonials__container' {...settings}>
        {
          data.map(
            ({avatar, name, review, index}) => {
              return(
                <article key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt="testimonial"/>
                  </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
                </article>
              )
            }
          )
        }


      </Slider>
    </section>
  )
}

export default Testimonials;