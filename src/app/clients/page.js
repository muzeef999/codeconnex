"use client";
import Appbar from "@/compoents/Appbar";
import clients from "../clients/clients.module.css";
import React, { useEffect } from "react";

import kathalaykids from "../asserts/companylogo/kathalayakids.png";
import medilight from "../asserts/companylogo/medlight.png";
import builtofy from "../asserts/companylogo/builtofy.png";
import tyent from "../asserts/companylogo/tyent.png";
import yeluri from "../asserts/companylogo/yeluri.png";
import global from "../asserts/companylogo/global.png";
import blackboard from "../asserts/companylogo/blackboard.png";
import casa from "../asserts/companylogo/casa.png";
import neon from "../asserts/companylogo/neontribe.png";
import cafe from "../asserts/cafe2.webp";
import Image from "next/image";
import Footer from "@/compoents/Footer";
import lucas from "../asserts/logo/lucasinterio.png";
import bouncer from "../asserts/logo/bouncer.webp";
import namasivaya from "../asserts/logo/namasivaya.png";
import tdp from "../asserts/logo/tdp.png";
import trutoasty from "../asserts/logo/trutoasty.png";
import swayambh from "../asserts/logo/swayambh.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Clients = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".clint_fix",
        start: "-120px top",
        end: "800px top",
        scrub: 1.5,
        invalidateOnRefresh: true,
        pin: true,
      },
    });
    // Add your animations to the timeline
    timeline.to(
      ".Team_sec",
      {
        x: -3700, // Adjusted value for mobile devices
      },
      "rc"
    );
    const cancelFunction = () => {
      timeline.kill();
    };

    return () => {
      cancelFunction();
    };
  }, []);
  return (
    <div className="clint-bg">
      <Appbar />
      <div className="container client_page">
        <h1>
          We've collaborated with a diverse range of companies, tailoring user
          experiences for peak performance and impact.
        </h1>

        {/* <div className="client_main">
  <div className="clint_fix">
    <div className="client_cover">
      <div className="second_client">
            <div className="red">
             <h1>We've collaborated with a diverse range of companies, tailoring user
          experiences for peak performance and impact.</h1>
            </div>
            <div className="red1">
             <h1>We've collaborated with a diverse range of companies, tailoring user
          experiences for peak performance and impact.</h1>
            </div>
      </div>

    </div>

  </div>

</div> */}

        <div className="clients_logo">
          <div className="row">
            <div className="col-md-4 graph">
              <a href="https://builtofy.com/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={builtofy} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph">
              <a href="https://kathalayakids.com/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={kathalaykids} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph lol-3">
              <a
                href="https://medilighthealthcare.com/index.html"
                target="_blank"
              >
                <div className="lol">
                  <div className="img">
                    <Image src={medilight} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph line-4">
              <a href="https://www.tyent.co.in/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={tyent} />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4">
              <a href="https://lucasinterio.com/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={lucas} />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4 lol-3">
              <a href="https://www.tyent.co.in/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={bouncer} className="bounce" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4">
              <a href="https://trutastes.in/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={trutoasty} className="bounce" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4 ">
              <a
                href="https://swayambh-edu.com/points-calculator.html"
                target="_blank"
              >
                <div className="lol">
                  <div className="img">
                    <Image src={swayambh} className="bounce" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4 lol-3">
              <a href="https://namasivayaenterprises.com/" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={namasivaya} className="bounce" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 graph line-4 ">
              <a href="">
                <div className="lol">
                  <div className="img">
                    <Image src={tdp} className="bounce" />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph line-4">
              <a href="https://yelurihospitals.com/index.html" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={yeluri} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph lol-3 line-4">
              <a href="">
                <div className="lol">
                  <div className="img">
                    <Image src={global} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph">
              <a href="" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={blackboard} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph">
              <a href="" target="_blank">
                <div className="lol">
                  <div className="img">
                    <Image src={casa} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 graph lol-3">
              <a href="https://www.cafekhardungla.com/" target="_blank">
                <div className="lol">
                  <div className="img ">
                    <Image src={cafe} className="cafe" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
