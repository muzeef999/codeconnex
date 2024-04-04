import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerlogo from "../app/asserts/logofooter.png";
import footerlocation from "../app/asserts/footerlocation.png";
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#27b9ec", color: "#FFF" }} className="foot">
      <div className="container foot-cont">
        <div className="row row-data">
          <div className="col-md-4">
            <Image src={footerlogo} alt="logoFooter" className="footerlogo" />
            <p>
              Maximize your online presence with our digital marketing agency!
              We specialize in crafting custom strategies to elevate your brand,
              drive traffic, and generate leads. Let us help you reach your
              target audience and achieve your business goals through innovative
              digital solutions.
            </p>
          </div>
          <div className="col-md-4 footer-content ">
            <div>
              <h1>Services</h1>
              <Link className="footerlinks" href={"/"}>
                Web Development
              </Link>
              <br />
              <Link className="footerlinks" href={"/blog"}>
                Mobile App Development
              </Link>
              <br />
              <Link className="footerlinks" href={"/clients"}>
                Graphic Design
              </Link>
              <br />
              <Link className="footerlinks" href={"/careers"}>
                Data Digital Marketing
              </Link>
              <br />
              <Link className="footerlinks" href={"/contactUs"}>
                Brand Identity
              </Link>
            </div>
          </div>
          <div className="col-md-4 footer-content foot-map">
            <div>
              <h1>Location</h1>
              <div className="footer_frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.51534884543!2d78.36351517594053!3d17.43503120142943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918b8329738f%3A0xfbf7bd3bf9e6e099!2sCode%20Connex%20Pvt.Ltd%20-%20Best%20Software%20Company%20in%20Hyderabad%20%7C%20Digital%20Marketing%20%7C%20Web%20Design%20%26%20Development%20%7C%20App%20Development!5e0!3m2!1sen!2sin!4v1708066169236!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
