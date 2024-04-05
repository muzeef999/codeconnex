import React, { useEffect, useRef } from "react";
import Appbar from "./Appbar";
import Image from "next/image";
import Link from "next/link";
import footerlogo from "../app/asserts/logofooter.png";
import { TiArrowDownThick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import kathalay from "../app/asserts/companylogo/kathalayakids.png";
import builtofy from "../app/asserts/companylogo/builtofy.png";
import casa from "../app/asserts/companylogo/casa.png";
import tyent from "../app/asserts/companylogo/tyent.png";
import medlight from "../app/asserts/companylogo/medlight.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Team from "./Team";
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
import { Draggable } from "gsap/dist/Draggable";
const Mobile = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Refer",
        start: "15px top",
        end: "3000px top",
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

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".work_flow",
  //       start: "-170px center",
  //       end: "100px center",
  //       scrub: 1.5,
  //       invalidateOnRefresh: true,
      
  //     },
  //   });
  //   // Add your animations to the timeline
  //   timeline.to(
  //     ".work_flow_chart",
  //     {
  //       y:-150 // Adjusted value for mobile devices
  //     },
  //   );
  //   const cancelFunction = () => {
  //     timeline.kill();
  //   };

  //   return () => {
  //     cancelFunction();
  //   };
  // }, []);


  // for workflow
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".stick",
        start: "50px top",
        end: "2000px top",
        scrub: 1.5,
        invalidateOnRefresh: true,
        pin:true
      
      },
    });
    // Add your animations to the timeline
    timeline.to(
      ".G-one",
      {
        y:-400 ,
       // Adjusted value for mobile devices
      },
      "rc"
    );
    timeline.to(
      ".G-two",
      {
        y:400 ,
        // Adjusted value for mobile devices
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

  // for service page
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".Home_service",
  //       start: "-190px center",
  //       end: "100px center",
  //       scrub: 1.5,
  //       invalidateOnRefresh: true,
  //       markers:true
      
  //     },
  //   });
  //   // Add your animations to the timeline
  //   timeline.to(
  //     ".Home_service",
  //     {
  //          backgroundColor:"black"
  //     },
  //   );
  //   const cancelFunction = () => {
  //     timeline.kill();
  //   };

  //   return () => {
  //     cancelFunction();
  //   };
  // }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
    });
  }, []);

  // draggble in gsap dragger
  useEffect(() => {
    // Ensure Draggable is registered with GSAP
    gsap.registerPlugin(Draggable);

    // Make the element with ID 'draggableElement' draggable
    Draggable.create(".wo_rk_one", {
      type: "x,y", // Allow dragging along both x and y axes
      bounds: ".main", // Constrain dragging within the element with ID 'container'
    });
  }, []);
  // all start
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="all_bg">
      <div className="mobile_device_start">
        <div className="mobile-res">
          <div className="for_background">
            <div className="home_c">
              <h1>Welcome to Code Connex</h1>
              <p className="d-flex justify-content-center align-items-center" >
                Bring your imagination to real life. We are here to connect
                creativity with dreams.
              </p>
            </div>
          </div>
          <div className="my-3 p-2">
            <h2 data-aos="fade-up" >
              Efficiency & Effectiveness in every step of Web Design and App
              Development
            </h2>
            <div className="hr_line"></div>
            <p style={{ textAlign: "justify" }}data-aos="fade-up">
              If you are looking to overshadow your competitors and win the
              heart of your customers with a graet online presence, then you are
              just where you need to be. Since 2016 Providing services like
              mobile application development, web development, graphics desiging
              and digital marketing, we, at code Connex can guarantee that, with
              our services your brand will rule the market
            </p>
          </div>

          <div className="project_section">
            <div>
              <h1>150+</h1>
              <h3>Projects</h3>
            </div>
            <div>
              <h1>100+</h1>
              <h3>Happy Clients</h3>
            </div>
          </div>
          <div className="btn_home">
            <button>Know More</button>
          </div>
        </div>

        {/* start  */}
 
 <div className="main">
<div className="stick">
<div className="gsap-work-flow">
     <div className="sbu-gsap">
<div className="test_case5">
  {/* <h1>nadfadlk</h1> */}
<div className="wo_rk_par">
<div className="d-flex">
<div className="wo_rk_one">
 <div className="p-3">
 <h1>Client Requirement</h1>
 </div>
 <div className="h_one">
 <h1>01</h1>
 </div>
</div>
</div>


{/* second */}

<div className="d-flex">
<div className="wo_rk_two">

 <div className="h_one">
 <h1>02</h1>
 </div>
 <div className="p-3">
 <h1>Planning</h1>
 </div>
</div>
</div>

{/* three */}
<div className="d-flex">
<div className="wo_rk_one">
 <div className="p-3">
 <h1>UI/UX</h1>
 </div>
 <div className="h_one ms-20">
 <h1>03</h1>
 </div>
</div>
</div>

{/* four */}
<div className="d-flex">
<div className="wo_rk_two">

 <div className="h_one">
 <h1>04</h1>
 </div>
 <div className="p-3">
 <h1>Developing</h1>
 </div>
</div>
</div>

{/* five */}
<div className="d-flex">
<div className="wo_rk_one">
 <div className="p-3">
 <h1>Digital Marketing</h1>
 </div>
 <div className="h_one ms-20">
 <h1>05</h1>
 </div>
</div>
</div>
</div>

{/* finish */}
  <div className="G-one">
<h1>WORKFLOW</h1>
  </div>
  <div className="G-two">
<h1>WORKFLOW</h1>
</div>
</div>
     </div>
    </div>
</div>
 </div>
     
 

        {/* client start */}

        <div className="my-5 home-swipper">
          <div className="d-grid justify-content-center align-items-center">
            <h1 className="">Clients</h1>
            <div className="hr_line "></div>
          </div>
          <Swiper
           spaceBetween={30}
           centeredSlides={true}
           loop={true}
           autoplay={{
             delay: 500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           slidesPerView={2}
           onAutoplayTimeLeft={onAutoplayTimeLeft}
           breakpoints={{
             640: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 4,
               spaceBetween: 40,
             },
             1024: {
               slidesPerView: 5,
               spaceBetween: 50,
             },
           }}
           className="mySwipers"
          >
            <SwiperSlide>
              <div>
                <Image src={kathalay} className="i_mg"></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={medlight} className="i_mg"></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={tyent} className="i_mg"></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={casa} className="i_mg"></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={builtofy} className="i_mg"></Image>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                            <div>
                              <Image src={kathalay} className='i_mg'></Image>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div>
                              <Image src={kathalay} className='i_mg'></Image>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div>
                              <Image src={kathalay} className='i_mg'></Image>
                              </div>
                            </SwiperSlide> */}
          </Swiper>
        </div>

        {/* client end */}

        {/* service section start */}

        <div className="Home_service">
          <div className="d-grid justify-content-center align-items-center">
            <h1>Services</h1>
            <div className="hr_line "></div>
          </div>

          <div className="Ser_vice">
            <div
              className="d-flex justify-content-center align-items-center text-centre"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2>Digital Marketing</h2>
            </div>
            <div
              className="d-flex justify-content-center align-items-center text-center"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2>Web Development & Design</h2>
            </div>
            <div
              className="d-flex justify-content-center align-items-center text-center p-1"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2>Mobile App Development</h2>
            </div>
            <div
              className="d-flex justify-content-center align-items-center text-center"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2>Brand Identity</h2>
            </div>
          </div>
        </div>

        {/* end */}

        {/* start */}

        {/* end */}
      </div>

      <div className="Home_test">
        <div className="my-5 ms-2">
          <h1>Testimonial</h1>
          <div className="hr_line "></div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <h4>K.Dattu</h4>
              <p className="text-justify">
                "Code Connex", transformed our online presence with their
                exceptional website design and digital marketing strategies.
                Their team understood our vision and delivered a website that
                exceeded our expectations. Thanks to their expertise, our
                e-commerce business has experienced significant growth.
              </p>
              <h5 className="text-center">(E-commerce Industry)</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4>Varun</h4>
              <p className="text-justify">
                I can't recommend Code Conex enough! Their website development
                team created a sleek and user-friendly site for our tech
                startup, and their digital marketing services have helped us
                reach new audiences and increase our online visibility. Working
                with them has been a game-changer for our company
              </p>
              <h5 className="text-center">(Technology Industry)</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4>Kallam Sai Sandeep</h4>
              <p className="text-justify">
                "Code Connex" is simply outstanding. Their dedication to
                providing top-notch service is unmatched. From the initial
                consultation to the final product, they were responsive,
                professional, and innovative. Our healthcare website not only
                looks amazing but also functions seamlessly, thanks to their
                expertise in website design and development.
              </p>
              <h5 className="text-center">(Healthcare Industry)</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4>Kallam Sai Sandeep</h4>
              <p className="text-justify">
                Choosing Code Conex for our digital needs was one of the best
                decisions we made for our travel agency. Their team worked
                tirelessly to create a customized digital marketing strategy
                tailored to our goals, and the results speak for themselves. Our
                online presence has never been stronger, and we owe it all to
                "Code Connex".
              </p>
              <h5 className="text-center">(Travel Industry)</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4> Sarita Panwar</h4>
              <p className="text-justify">
                "Code Connex" revamped our legal firm's website and implemented
                effective digital marketing strategies. Their expertise
                increased our online visibility and client inquiries, making
                them an essential partner for any B2B business.
              </p>
              <h5 className="text-center">(E-commerce Industry)</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4> Rajesh Reddy </h4>
              <p>
                "Code Connex" has been instrumental in navigating the digital
                landscape for our consulting firm. Their tailored B2B marketing
                strategies and website development expertise have driven
                qualified leads and showcased our services effectively.
              </p>
              <h5 className="text-center"></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4>Abhijeet Verma </h4>
              <p>
                "Code Connex" B2B digital marketing services drove significant
                leads for our manufacturing company. Their strategic approach
                and attention to detail made them an invaluable partner in our
                growth.
              </p>
              <h5 className="text-center"></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h4>Dr. Pawan Rao</h4>
              <p>
                "Code Connex" transformed our healthcare practice's online
                presence. Their digital marketing and website development
                expertise boosted our visibility, attracting more patients and
                enhancing our reputation.
              </p>
              <h5 className="text-center">(Healthcare Industry)</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* footer data start */}
      {/* team page start */}
      {/* <div className="teampage_start">
 
        <div className="Refer">
        <h1 className="text-center">Code Connex Team</h1>
          <div className="team_main">
            
            <div className="ch_main">
           
              <div className="Team_sec">
                <div className="team-sec_img">
                  <Image src={sarika} className="img_img"></Image>
                </div>

                <div className="team-sec_img">
                  <Image src={sowmya} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={sushma} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={sidh} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={varun} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={muzeef} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={naveen} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={krishna} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={barghavi} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={pavan} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={prasant} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={madhu} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={manisha} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={sardar} className="img_img"></Image>
                </div>
                <div className="team-sec_img">
                  <Image src={varunit} className="img_img"></Image>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* end */}
    </div>
  );
};

export default Mobile;
