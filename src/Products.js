import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './Products.css';
import p1 from './images/p1.jpeg';

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,  
      once: true,    
    });
}, []);
  return (
    <>
      <div className="container my-5">
        <div className="row pt-2">
          <div className="col-md-6">
            <h1 className='product-heading' data-aos="fade-down">🛡️ What is the Well Mates Anti-Radiation Chip?</h1>
            <p className='product-text' data-aos="fade-down">
              In today's hyper-connected world, we rely on our cellphones for everything - work, entertainment, and communication. However, this convenience comes with a hidden risk: exposure to electromagnetic radiation. That's where the Well Mates Anti-Radiation Chip comes in.
            </p>
            <p className='product-text' data-aos="fade-down">
              This lightweight, non-electronic chip, made from superior shielding material, is designed to passively limit your daily exposure to mobile radiation. Unlike other devices that require power or apps, this chip works continuously, silently, and effectively - without affecting your phone's signal or performance.
            </p>
            <p className='product-text' data-aos="fade-down">✔️ Passive, 24/7 protection</p>
            <p className='product-text' data-aos="fade-down">✔️ Does not impact mobile signal, battery life, or performance</p>
            <p className='product-text' data-aos="fade-down">✔️ Made in ISO 9001:2015-certified facilities for quality assurance</p>
            <p className='product-text' data-aos="fade-down">
              <strong className='product-text' data-aos="fade-down">Simple to use:</strong><br />
              You don't have to be tech-savvy to protect yourself. Just:
            </p>
            <ul className='product-text' data-aos="fade-down">
              <li>Peel off the sticky backing</li>
              <li>Stick it to the back of your phone or phone case</li>
              <li>Forget it - it works continuously from the moment it's applied</li>
            </ul>
          </div>

          <div className="col-md-6 text-center pt-4">
            <img 
              src={p1}
              alt="Well Mates Anti-Radiation Chip" 
              className="product-img" data-aos="fade-down"
            />
          </div>
          <p className='product-text' data-aos="fade-down">
              Whether you have a smartphone or a basic phone, Well Mates keeps you protected - discreetly and consistently.
            </p>
        </div>
      </div>

      <div className='order-bg'>
      <div className="container my-5">
        <h1 className='product-heading pt-4' data-aos="fade-right">🎯 Why Choose Well Mates?</h1>
        <p className='product-text' data-aos="fade-right">
          With so many electronics in our lives, limiting radiation exposure is more important than ever - and Well Mates makes it simple, safe, and effective.
        </p>
        <p className='product-text' data-aos="fade-right">✅ <strong>Universal Compatibility</strong> - Works with any smartphone, regardless of brand or model</p>
        <p className='product-text' data-aos="fade-right">✅ <strong>No Batteries or Apps Required</strong> - No hassle, no maintenance</p>
        <p className='product-text' data-aos="fade-right">✅ <strong>Completely Safe</strong> - Suitable for kids, teens, adults, and seniors</p>
        <p className='product-text' data-aos="fade-right">✅ <strong>Supports a Healthier Lifestyle</strong> - Reduces exposure to EMR from daily phone use</p>
        <p className='product-text' data-aos="fade-right">✅ <strong>Long-Lasting Protection</strong> - Engineered to last up to 2 years without losing effectiveness</p>
        <p className='product-text' data-aos="fade-right">✅ <strong>Quality Guaranteed</strong> - Made using stringent ISO-certified systems for safety and performance</p>
      </div>
      <br/>
      </div>

      <div className='order-bg2'>
      <div className="container">
        <h1 className='product-heading pt-4' data-aos="fade-left">💡 Who is This For?</h1>
        <p className='product-text' data-aos="fade-left">🔹 Parents concerned about their children's phone use</p>
        <p className='product-text' data-aos="fade-left">🔹 Students and professionals who use phones for long hours</p>
        <p className='product-text' data-aos="fade-left">🔹 Seniors who desire safer phone habits</p>
        <p className='product-text' data-aos="fade-left">🔹 Anyone seeking to limit radiation exposure without changing their lifestyle</p>

        <h5 className="product-subheading mt-4"  data-aos="fade-left">Peace of Mind in a Small Package</h5>
        <p className='product-text'  data-aos="fade-left">
          The Well Mates Anti-Radiation Chip is your invisible shield - small in size, big on protection. It's an easy, affordable step toward a more mindful, health-conscious digital life.
        </p>
      </div>
      <br/>
      </div>

      <div className='order-bg'>
      <div className='container'>
        <h5 className='product-subheading pt-4' data-aos="fade-right">Order Now</h5>
        <p className="order-heading" data-aos="fade-right">Buy Well Mates Anti-Radiation Chip</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> Price: ₹499 per chip</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z"/></svg> Delivery: 3-7 working days</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-160v-640 640ZM637-40q-26 0-49-10.5T548-80L346-322l45-46q18-18 44-22.5t49 7.5l116 58v-355h80q66 0 113 47t47 113v320q0 66-47 113T680-40h-43ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360q33 0 56.5 23.5T680-800v120h-80v-120H240v640h241l67 80H240Zm180-600q17 0 28.5-11.5T460-720q0-17-11.5-28.5T420-760q-17 0-28.5 11.5T380-720q0 17 11.5 28.5T420-680Zm217 560h43q33 0 56.5-23t23.5-57v-320q0-33-23.5-56.5T680-600v405L468-302l138 168q6 7 14 10.5t17 3.5Z"/></svg> Order via WhatsApp: +91 91370 36623</p>
        <p className="order-heading" data-aos="fade-right">How to Order:</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg> Message us your name, address & quantity on WhatsApp</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg> We confirm your order</p>
        <p className='product-text' data-aos="fade-right"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-280v-400l200 200-200 200Z"/></svg> Fast delivery to your doorstep</p>
      </div>
      <br/>
      </div>
      <br />
    </>
  );
};

export default Products;
