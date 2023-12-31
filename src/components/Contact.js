import React from "react";
import NewsLetter from "./NewsLetter";

export default function Contact() {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#let's-talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit on of our agency locations or contat us today</h2>
          <h3>Head Offive</h3>
          <div>
            <li>
              <i className="fas fa-map"></i>
              <p>56 Glassford Street Glasglow G1 1UL New York</p>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <p>
                <a href="mailto:sloth2003nt@gmail.com">sloth2003nt@gmail.com</a>
              </p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>
                <a href="tel:+995598500215">+995598500215</a>
              </p>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <p>Monday to Saturday: 9:00 am to 16:00 pm</p>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <p>Monday to Saturday: 9:00am to 16pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.43812863505!2d-1.3176272045980324!3d51.75050176279572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2z4YOd4YOl4YOh4YOk4YOd4YOg4YOT4YOY4YOhIOGDo-GDnOGDmOGDleGDlOGDoOGDoeGDmOGDouGDlOGDouGDmA!5e0!3m2!1ska!2sge!4v1650127335168!5m2!1ska!2sge"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="img/people/1.png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Maneger <br />
              Phone: + 000 123 456 78 90 <br />
              contact#example.com
            </p>
          </div>
          <div>
            <img src="img/people/2.png" alt="" />
            <p>
              <span>William Smith</span> Senior Marketing Maneger <br />
              Phone: + 000 123 456 78 90 <br />
              contact#example.com
            </p>
          </div>
          <div>
            <img src="img/people/3.png" alt="" />
            <p>
              <span>Emma Stone</span> Senior Marketing Maneger <br />
              Phone: + 000 123 456 78 90 <br />
              contact#example.com
            </p>
          </div>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
}
