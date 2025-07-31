import React , { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faqs.css';

const Faqs = () =>{
    useEffect(() => {
            AOS.init({
              duration: 3000,  
              once: true,    
            });
        }, []);
    return (
        <>
        <div className="container">
            <h1 className="faq-heading" data-aos="fade-right">FAQ'S</h1>
            <h5 className="faq-ques pt-4" data-aos="fade-right">Q: How do I use the chip on my mobile device?</h5>
            <p className="faq-ans" data-aos="fade-right">A: Simply peel off the sticker and place it on the back of your phone or phone case.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Can I use the chip on tablets, laptops, or other electronics?</h5>
            <p className="faq-ans" data-aos="fade-right">A: Yes, the chip can be used on any electronic device that emits electromagnetic radiation (EMR).</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Is there any scientific proof that it works?</h5>
            <p className="faq-ans" data-aos="fade-right">A: The product is made under ISO 9001:2015 certified systems and tested for EMR attenuation, but it is not a medical device.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: What is EMR (Electromagnetic Radiation)?</h5>
            <p className="faq-ans" data-aos="fade-right">A: EMR is a form of energy emitted by electronic devices, including mobile phones, that may have biological effects with prolonged exposure.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Can I use multiple chips on one device?</h5>
            <p className="faq-ans" data-aos="fade-right">A: One chip is sufficient for normal mobile usage, but for larger devices or added precaution, multiple chips can be used.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Will the chip damage or heat up my phone?</h5>
            <p className="faq-ans" data-aos="fade-right">A: No, the chip is passive, non-electronic, and does not generate heat or affect phone components.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Is the chip waterproof?</h5>
            <p className="faq-ans" data-aos="fade-right">A: The chip is water-resistant to some extent, but it is recommended to avoid soaking it for durability.</p>
            <h5 className="faq-ques" data-aos="fade-right">Q: Will it work if I use a phone case?</h5>
            <p className="faq-ans" data-aos="fade-right">A: Yes, you can stick the chip either on the phone directly or on the outer surface of the phone case.</p>
            <br/>
        </div>
        </>
    )
}
export default Faqs;