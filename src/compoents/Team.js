import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger separately
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import sowmya from "../app/asserts/sowmya.jpeg";
import sidh from "../app/asserts/sidh.jpeg";
import prashant from "../app/asserts/prashantbdm.jpeg";
import manisha from "../app/asserts/manisha.jpeg";
import madhu from "../app/asserts/madhu.jpeg";
import varun from "../app/asserts/varun.jpeg";
import muzeef from "../app/asserts/muzeef.jpeg";
import prasant from "../app/asserts/prashantit.jpeg";
import krishna from "../app/asserts/krishna.jpeg";
import barghavi from "../app/asserts/barghavi.jpeg";
import pavan from "../app/asserts/pavan.jpeg";
import sushma from "../app/asserts/sushma.jpeg";
import naveen from "../app/asserts/naveen.jpeg";
import sarika from "../app/asserts/sarikamaam.png";
import varunit from "../app/asserts/varunit.jpeg";
import sardar from "../app/asserts/sardar.jpg";
const Team = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "3000px top",
        scrub: 1.5,
        invalidateOnRefresh: true,
        pin: true,
      },
    });
  
    // Add your animations to the timeline
    timeline.to(
      ".your-element",
      {
        rotate: 500,
      },
      "rc"
    );
  
    timeline.to(
      ".four",
      {
        rotate: -100,
      },
      "rc"
    );
  
    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed
  
    if (isMobile) {
      timeline.to(
        ".card-section",
        {
          x: -5700, // Adjusted value for mobile devices
        },
        "rc"
      );
    } else {
      timeline.to(
        ".card-section",
        {
          x: -4800, // Default value for laptop and desktop devices
        },
        "rc"
      );
    }
  
    // Cancel function to kill the timeline
    const cancelFunction = () => {
      timeline.kill();
    };
  
    return () => {
      cancelFunction();
    };
  }, []);
  

  return (
    <div>
      <section className="scroll-section-outer">
        <h1 className="text-center cc">Code Connex Team</h1>
        <div ref={triggerRef}>
        <h1 className="text-center ccs">Code Connex Team</h1>
          <div className="scroll-section-inner">
            <div className="scroll-section">
              {/* Your content */}

              <div className="your-element">
              
                <div className="one">
      
                </div>
                <div className="two">
                <div className="child_one">
                    
                    </div>
                </div>
                <div className="three">
                <div className="child_two">
                    
                    </div>
                </div>
                <div className="four">
                  <div className="child_three">

                  </div>
                </div>
                <div className="five">
                <div className="child_four">
                  
</div>
                </div>
           
              </div>
              {/* card_1 */}

              <div className="card-section">
                <div className="cards">
                  <Image src={sarika} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/sarikareddydg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Sarika Reddy</p>
                    <p>Designation :Chairman & Managing Director (CEO)</p>
                  </div>
                </div>

                <div className="cards">
                  <Image src={sowmya} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/sowmya-alwala-289699252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Sowmya Alwala</p>
                    <p>Designation : Chief Operating Officer (COO)</p>
                  </div>
                </div>

                {/* card-3 */}

                <div className="cards">
                  <Image src={sidh} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/sidhasila-naik-b88327113/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Sidhasila Naik</p>
                    <p>Designation : Digital Marketing Executive</p>
                  </div>
                </div>

                {/* card-4 */}

               

                {/* card-5 */}

                <div className="cards">
                  <Image src={sushma} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/prasanth-gopi-chagarlamudi-b02202245/"
                      target="_blank"
                    >
                      {/* <div className="d-flex  justify-content-center text-center linkdin">
                   <FaLinkedinIn />
                    </div> */}
                    </a>
                    <p>Name : Sushma</p>
                    <p>Designation : Business Development Manager</p>
                  </div>
                </div>

                {/* card-6 */}

                <div className="cards">
                  <Image src={varun} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/varun-raj-5b9409155/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Varun Raj</p>
                    <p>Designation : Business Development Manager</p>
                  </div>
                </div>


                {/* <div className="cards">
                  <Image src={prashant} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/prasanth-gopi-chagarlamudi-b02202245"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Prasanth</p>
                    <p>Designation : Business Development Manager</p>
                  </div>
                </div> */}



                <div className="cards">
                  <Image src={muzeef} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/shaik-muzeef-5a5028248/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Muzeef</p>
                    <p>Designation : Full Stack Developer</p>
                  </div>
                </div>

                <div className="cards">
                  <Image src={krishna} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/prasanth-gopi-chagarlamudi-b02202245/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Krishna</p>
                    <p>Designation : Sr UI/UX Designer</p>
                  </div>
                </div>

                <div className="cards">
                  <Image src={barghavi} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/bondugula-bhargavi-a3562b270/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Bhargavi</p>
                    <p>Designation : Graphic Designer </p>
                  </div>
                </div>

                <div className="cards">
                  <Image src={pavan} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/kalyan-pavan-2a7902274"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center text-center linkdin linkdins">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <p>Name : Pavan Kalyan</p>
                    <p>Designation : It Recruiter </p>
                  </div>
                </div>

                <div className="cards">
                  <Image src={manisha} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/manisha-gundu-285aa7171"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin linkdins">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : Manisha</p>
                      <p>Designation : It Recruiter</p>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <Image src={prasant} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/gude-prashanth-396052243/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin linkdins">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : prashant</p>
                      <p>Designation : It Recruiter</p>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <Image src={madhu} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/madhu-mitha-857777261/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin linkdins">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : Madhu</p>
                      <p>Designation : It Recruiter</p>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <Image src={sardar} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/search/results/all/?keywords=banoth%20sardarsingh&origin=GLOBAL_SEARCH_HEADER&sid=whs"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin linkdinss">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : Sardar Singh</p>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <Image src={naveen} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/prasanth-gopi-chagarlamudi-b02202245/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin ">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : Naveen</p>
                      <p>Designation : Frontend Developer</p>
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <Image src={varunit} className="img"></Image>
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/prasanth-gopi-chagarlamudi-b02202245/"
                      target="_blank"
                    >
                      <div className="d-flex  justify-content-center  linkdin linkdins">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <div className="d-grid justify-content-center text-center">
                      <p>Name : Varun</p>
                      <p>Designation : It Admin</p>
                    </div>
                  </div>
                </div>

                {/* card-5 */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
