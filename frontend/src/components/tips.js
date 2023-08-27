import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import tip1 from "../assets/images/tips1.png";
import tip2 from "../assets/images/tips2.png";
import tip3 from "../assets/images/tips3.png";
import test from "../assets/images/testi_img.png";
import location from "../assets/images/Location-Manager.png"
import guide from "../assets/images/Private-Guide.png"
import arrange from "../assets/images/Arrangements.png"
import active from "../assets/images/Events-Activities.png"


const Tips = () => {
  return (
    <>
      <div className="tips-main">
        <div className="tips-left">
          <h3>TIPS BEFORE TRAVEL</h3>
          <div className="left-content">
            <img src={tip1} alt=""></img>
            <div className="left-text">
              <p>Bring copies of your passport</p>
              <span>
                Photocopies of key passport pages including those of permits and
                traveling visas.
              </span>
            </div>
          </div>
          <div className="left-content">
            <img src={tip2} alt=""></img>
            <div className="left-text">
              <p>Register with your embassy</p>
              <span>
                Make sure you have all info regarding your government's
                diplomatic representation.
              </span>
            </div>
          </div>
          <div className="left-content">
            <img src={tip3} alt=""></img>
            <div className="left-text">
              <p>Southlander® Stash-Your-Cash</p>
              <span>
                If you carry around cash make sure you stash it with us
                free-of-charge.
              </span>
            </div>
          </div>
        </div>
        <div className="tips-right">
          <h3>24/7 CLIENT SERVICE</h3>
          <div className="right-content">
            <img src={test} alt=""></img>
            <div className="left-text">
              <p>Chat with a human for support 24 hours a day, 7 days a week</p>
              <span>
                Southlander Travel means Ecuador From A to Z, 24 hours a day, 7
                days a week to guarantee your satisfaction while trusting our
                services.
              </span>
              <div className="tips-social">
                <div className="social-unit">
                  <a href="#">WhatsApp</a>
                </div>
                <div className="social-unit">
                  <a href="#">Facebook</a>
                </div>
                <div className="social-unit">
                  <a href="#">Instagram</a>
                </div>
              </div>
            </div>            
          </div>
          <h3>CUSTOMIZED ARRANGEMENT & HELPS</h3>
          <div className="right-images">
            <img src={location} alt=""></img>
            <img src={guide} alt=""></img>
            <img src={arrange} alt=""></img>
            <img src={active} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
