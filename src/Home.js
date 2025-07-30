import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import p2 from './images/p2.jpeg';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,  
          once: true,    
        });
    }, []);
    
  return (
    <>
    <div className='background-section'>
        <div className='container'>
            <div  className="row align-items-center">
                <h1 className='heading' data-aos="fade-up">Welcome to <span className='heading-two'>Well Mates</span></h1>
                <p className='sub-heading' data-aos="fade-up">Reduce Mobile Radiation. Protect What Matters Most.</p>
                <p className='text' data-aos="fade-up">Use your smartphone safely with our anti-radiation chip - ISO certified, simple to use, and safe for everyone.</p>
            </div>
        </div>
    </div>

    {/*Anti Radiation Chip*/}
    <div className='antiradiationchip-bg'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={p2} className='antiradiationchip-img' data-aos="fade-right" alt='antiradiationchipimg'/>
        </div>
        <div className='col-md-6'>
          <h1 className='antiradiationchip-heading' data-aos="fade-right">Anti-Radiation Chip</h1>
          <p className='antiradiationchip-text' data-aos="fade-left">To assist lower daily exposure to electromagnetic radiation (EMR) from cellphones, Well Mates developed a lightweight, non-electronic gadget called the Anti-Radiation Chip.  It is made of cutting-edge shielding material and operates passively around-the-clock without interfering with the performance, signal, or battery life of your phone.  Peel it off and place it on the back of your phone or case; no apps or charging are needed.  All ages can safely use it, and it lasts for up to two years.  The chip is produced using systems certified by ISO 9001:2015 and is renowned for its high quality.  Perfect for anyone looking to promote safer phone use in a straightforward, long-lasting manner.</p>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-md-10' data-aos="fade-up">
          <div className='ratio ratio-16x9'>
            <iframe src="https://www.youtube.com/embed/aPhBR4ncbew" title="Well Mates Anti-Radiation Chip" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <br />

    {/* Testimonials Section */}
    <div className='testimonial-section'>
<div className="container">
  <h2 className="text-center mb-4 pt-4" data-aos="fade-up">What Our Customers Say</h2>
  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="d-flex flex-column align-items-center text-center p-4">
          <p className="fs-5 fst-italic">"Well Mates chip gave me peace of mind. I use my phone all day for work and now I feel safer!"</p>
          <h5 className="fw-bold mt-3">- Priya </h5>
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex flex-column align-items-center text-center p-4">
          <p className="fs-5 fst-italic">"Easy to use, no app needed, and it doesn't affect my phone's performance. Highly recommended!"</p>
          <h5 className="fw-bold mt-3">- Arjun </h5>
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex flex-column align-items-center text-center p-4">
          <p className="fs-5 fst-italic">"I got one for my kids too. It's small, effective, and trustworthy. Great product!"</p>
          <h5 className="fw-bold mt-3">- Meena </h5>
        </div>
      </div>

    </div>

    {/* Carousel Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>
<br/>
    </>
  )
}

export default Home;
