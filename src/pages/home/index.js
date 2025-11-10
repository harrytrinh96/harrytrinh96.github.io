import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";

import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import { Projects } from "../projects";
import React from "react";
import Typewriter from "typewriter-effect";
import avatarImage from "../avt.png";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <br/><br/>
              <div className="intro mx-auto">
                <img width="400px" className="profile-img" alt="Harry Trinh" src={avatarImage} />
                <h2 className="mb-1x">{introdata.title}</h2>
                
                <h6 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h6>

                <br/>
                <p className="mb-1x">{introdata.description}</p>
                <p className="mb-1x">{introdata.description_two}</p>
                <p className="mb-2x">
                  If you want to work with me or to find a co-founder of a startup, please get in touch! 💪
                </p>

                <div className="intro_btn-action pb-5">
                  <Link to="/contact" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Get in Touch
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="down"> ↓ Publications & Projects ↓</p>
            </div>
          </div>

          <div className="blob">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 310 350">
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
          </div>
        </div>
      </section>
      <Portfolio/>
      <Projects/>
    </HelmetProvider>
  );
};

