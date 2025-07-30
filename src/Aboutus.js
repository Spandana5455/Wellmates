import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Aboutus.css';
import "bootstrap/dist/css/bootstrap.min.css";
import r1 from './images/r1.jpg';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  
      once: true,    
    });
}, []);
  return (
    <>
    <div className='mobileradiation-section'>
      <div className='container'>
        <h1 className='aboutus-heading'>About Us</h1>
        <p className='aboutus-text'>Located in Medipally, Medchal-Malkajgiri, Hyderabad, Telangana - 500098, Well Mates Enterprises is a trusted name in health and 
          anti-radiation solutions. Our mission is to protect your well-being with smart, effective products designed to reduce mobile 
          radiation exposure.
        </p>
        <p className='aboutus-text'>Founded by a passionate team of researchers, we focus on innovation, quality, and safety. Every product is ISO certified, tested, 
          and built for modern lifestyles.We combine cutting-edge technology with user-friendly design-giving you reliable protection, peace 
          of mind, and a healthier way to stay connected.
        </p>
      </div>
    </div>
    <br/>
    <div className='container'>
      <div className='row'>
      <div className='col-md-6'>
      <h1 className='aboutus-mobileheading' data-aos="fade-right">What is Mobile Radiation?</h1>
      <p className='aboutus-mobiletext' data-aos="fade-right">Mobile phones produce Electromagnetic Radiation (EMR), a type of radiation that travels in waves, particularly during conversations, video 
        streaming, gaming, and internet surfing.  This radiation, which is invisible and odorless, is absorbed by your body whenever you hold your 
        phone close to your head or carry it in your pocket.
      </p>
      <p className='aboutus-mobiletext' data-aos="fade-right">Frequent and extended exposure to EMR can affect cellular function over time and has been related to potential health issues such as brain, neurological system, fertility, and hormone balance.
        According to the World Health Organization (WHO), long-term exposure to mobile radiation may raise the risk of brain cancers and other health issues, particularly if used often.
      </p>
      </div>
      <div className='col-md-6'>
        <img src={r1} className='radiation-img' data-aos="fade-left" alt='radiationimg'/>
      </div>
      </div>
      </div>

      <div className='container'>
      <h1 className='aboutus-subheading'>Who is at greater risk?</h1>
      <p className='aboutus-text'>The following categories may be more exposed to mobile radiation effects:</p>
      <p className='aboutus-text'><strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg>Children: </strong>Children's smaller skulls and fast brain growth make them more vulnerable to long-term damage from radiation exposure.</p>
      <p className='aboutus-text'><strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg>Pregnant Women: </strong>Radiation may enter the abdomen and interfere with embryonic brain and organ development, particularly in the early stages of pregnancy.</p>
      <p className='aboutus-text'><strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg>Frequent phone users: </strong>People who spend hours on the phone each day hold their phones near to their heads, resulting in high localized radiation exposure that may harm the brain, hearing, and memory over time.</p>
      <p className='aboutus-text'><strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg>Men with Phones in Pockets: </strong>Prolonged contact to reproductive organs may result in lower sperm quality, hormone imbalance, and fertility issues.</p>
      <p className='aboutus-text'><strong><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg>Anyone Sleeping with Phones Nearby: </strong>Keeping phones close while sleeping exposes the body to low-level radiation throughout the night, which may disrupt sleep quality and the body's normal healing cycles.</p>
    </div>

    <div className='ourmission-section'>
    <div className='container'>
      <h1 className='ourmission-heading pt-4'data-aos="fade-right">Our Mission</h1>
      <p className='ourmission-text' data-aos="fade-right">We created Well Mates to provide a simple, inexpensive, and practical alternative for lowering mobile radiation exposure in daily life. 
        As cellphones have become an indispensable part of contemporary life, we feel that safety should be as accessible and integrated, 
        particularly for families, small children, and expecting moms, who are more sensitive to possible hazards.
      </p>
      <p className='ourmission-text' data-aos="fade-right">Our anti-radiation chip was created with both science and simplicity in mind. It integrates seamlessly into your routine; 
        simply apply it to the back of your gadget and it will begin working as a protective barrier. It is small and subtle, and it 
        has no effect on the operation of your phone, but it does give something invaluable: peace of mind.
      </p>
      <p className='ourmission-text' data-aos="fade-right">Well Mates' purpose is clear: to provide folks with a smart, proactive solution to limit EMF exposure without changing how they 
        live or interact.  Whether you're at home, at work, or on the go, our chip represents a modest step toward a safer, healthier 
        digital lifestyle.The Well Mates chip, which has been tested for efficacy and durability, integrates easily into your digital life.
        It's more than simply a product; it's a pledge to better living in an interconnected world.
        With Well Mates, you can join thousands of others who have already taken the step toward safer smartphone usage.
      </p>
    </div>
    </div>
    <br/>
    </>
  )
}

export default Aboutus
