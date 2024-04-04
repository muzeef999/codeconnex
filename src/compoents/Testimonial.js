import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='testimonial_parent'>
      <div className='testimonial_second-parent'>
      <div className='container-fluid cd'>
      <h1 className='text-center testimonial-start'>Testimonial</h1>
      <Slider {...settings} className='slider'>
        <div className='row-d'>
          <div>
            <h4>K.Dattu</h4>
            <p>"Code Connex", transformed our online presence with their exceptional website design and digital marketing strategies. Their team understood our vision and delivered a website that exceeded our expectations. Thanks to their expertise, our e-commerce business has experienced significant growth.</p>
            <h5 className='text-center'>(E-commerce Industry)</h5>
          </div>
        </div>
        <div className='row-d'>
        <h4>Varun</h4>
            <p>I can't recommend Code Conex enough! Their website development team created a sleek and user-friendly site for our tech startup, and their digital marketing services have helped us reach new audiences and increase our online visibility. Working with them has been a game-changer for our company</p>
            <h5 className='text-center'>(Technology Industry)</h5>
        </div>
        <div className='row-d'>
        <h4>Kallam Sai Sandeep</h4>
            <p>"Code Connex" is simply outstanding. Their dedication to providing top-notch service is unmatched. From the initial consultation to the final product, they were responsive, professional, and innovative. Our healthcare website not only looks amazing but also functions seamlessly, thanks to their expertise in website design and development.</p>
            <h5 className='text-center'>(Healthcare Industry)</h5>
        </div>
        <div className='row-d'>
        <h4>Kallam Sai Sandeep</h4>
            <p>Choosing Code Conex for our digital needs was one of the best decisions we made for our travel agency. Their team worked tirelessly to create a customized digital marketing strategy tailored to our goals, and the results speak for themselves. Our online presence has never been stronger, and we owe it all to "Code Connex".</p>
            <h5 className='text-center'>(Travel Industry)</h5>
        </div>
        <div className='row-d'>
        <div>
            <h4>Dr. Pawan Rao</h4>
            <p>"Code Connex" transformed our healthcare practice's online presence. Their digital marketing and website development expertise boosted our visibility, attracting more patients and enhancing our reputation.</p>
            <h5 className='text-center'>(Healthcare Industry)</h5>
          </div>
        </div>
        <div className='row-d'>
        <div>
            <h4>Abhijeet Verma </h4>
            <p>"Code Connex" B2B digital marketing services drove significant leads for our manufacturing company. Their strategic approach and attention to detail made them an invaluable partner in our growth.</p>
            <h5 className='text-center'></h5>
          </div>
        </div>
        <div className='row-d'>
        <div>
            <h4> Sarita Panwar</h4>
            <p>"Code Connex" revamped our legal firm's website and implemented effective digital marketing strategies. Their expertise increased our online visibility and client inquiries, making them an essential partner for any B2B business.</p>
            <h5 className='text-center'>(E-commerce Industry)</h5>
          </div>
        </div>
        <div className='row-d'>
        <div>
            <h4> Rajesh Reddy </h4>
            <p>"Code Connex" has been instrumental in navigating the digital landscape for our consulting firm. Their tailored B2B marketing strategies and website development expertise have driven qualified leads and showcased our services effectively.</p>
            <h5 className='text-center'></h5>
          </div>
        </div>
      </Slider>
    </div>
      </div>
    
    </div>
  )
}

export default Testimonial
