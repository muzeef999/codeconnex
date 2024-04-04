import React from "react";
import { AiOutlineSound } from "react-icons/ai";
import { FaMobileScreenButton } from "react-icons/fa6";
import { TbBrandPrisma } from "react-icons/tb";
import { FaPencilRuler } from "react-icons/fa";

const Herosectiontwo = () => {
  return (
    <div>
      <h1 className="herosectiontwoheading">
        We're not just a team,We're your growth partners Let's achieve amazing
        things together
      </h1>
      <div className="container con">
        <hr style={{ color: "#FFF" }} />
        <div className="parent">
          <div className="num">
            <p className="numbertext">01</p>
          </div>
          <div className="d-flex p-data">
            <div>
              <AiOutlineSound className="herosectiontwoicon" />
            </div>
            <div>
              <p>Digital Marketing</p>
            </div>
          </div>
          <div>
            <p>Count on us for long-term partnership and unwavering support</p>
          </div>
        </div>
        <hr style={{ color: "#FFF" }} />
        <div className="parent">
          <div className="num">
            <p className="numbertext">02</p>
          </div>
          <div className="d-flex  p-data">
            <div>
              <FaPencilRuler className="herosectiontwoicon" />
            </div>
            <div>
              <p>Web Development & Design</p>
            </div>
          </div>
          <div>
            <p>
              Sculpt pixel-perfect websites that convert visitors into brand
              evangelists
            </p>
          </div>
        </div>
        <hr style={{ color: "#FFF" }} />
        <div className="parent">
          <div className="num">
            <p className="numbertext">03</p>
          </div>
          <div className="d-flex p-data">
            <div>
              <FaMobileScreenButton className="herosectiontwoicon" />
            </div>
            <div>
              <p>Mobile App Development</p>
            </div>
          </div>
          <div>
            <p>
              Craft captivating mobile experiences that fit your budget and
              exceed expectations
            </p>
          </div>
        </div>
        <hr style={{ color: "#FFF" }} />
        <div className="parent">
          <div className="num">
            <p className="numbertext">04</p>
          </div>
          <div className="d-flex p-data">
            <div>
              <TbBrandPrisma className="herosectiontwoicon" />
            </div>
            <div>
              <p>Brand Identity</p>
            </div>
          </div>
          <div>
            <p>
              Tell your story through a unique visual language that resonates
              with your audience
            </p>
          </div>
        </div>
        <hr style={{ color: "#FFF" }} />
      </div>
    </div>
  );
};

export default Herosectiontwo;
