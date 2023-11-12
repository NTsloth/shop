import React from "react";

export default function Blog() {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b1.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Our zip-up hoodie is cut from loopback organic cotton in a relaxed
              profile designed with ribbed trims that will keep you looking cool
              on the laid-back days.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b2.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>How to Style a Quiff</h4>
            <p>
              A sharper, sleeker take on the old-school classic, the undercut
              quiff retains an authentic vintage feel, but also looks modern and
              edgy.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Must-Have Skater Girl Items</h4>
            <p>
              Skater girl fashion is usually a combination of punk, scene, and
              tomboy. Here are some ideas to get you started: Go monochrome with
              black jeans, black skater shoes, a faded black or grey vintage
              t-shirt, and a black and red cap.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b4.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>
              From oversize shirting to ballooned silhouettes and a continuation
              of the puff sleeve trend, dresses and tops will retain their
              volume through the end of the year. If anything, the latter will
              spice up all the soft pants you'll probably still be rocking on
              the bottom.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b6.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man Braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>10/03</h1>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest show and
            <span>special offers</span>.
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
}
