import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

import img01 from "../../public/images/about-img1.jpg";
import img02 from "../../public/images/about-img2.jpg";
import img03 from "../../public/images/about-img3.jpg";
import img04 from "../../public/images/about-img4.jpg";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      '<Container>
        <Row>
          <Col lg="6" className={`${classes.about_content}`}>
            <SectionTitle subtitle="About Us" />
            <h3 className="mt-4">We are here</h3>
            <h3 className="mb-4">to help you find the shoes that you want</h3>
            <p>
              KickSpace allows you to buy shoes without leaving your home. We
              have all types of shoes you need for various purposes and
              activities. Enjoy an easy and comfortable shopping experience with
              intuitive navigation, clear product descriptions, and high-quality
              images. Additionally, we offer competitive prices and fast
              shipping, so you can easily obtain your dream shoes. For size
              issues, we guide you through the size selection process. Don't
              hesitate to make a purchase because we accept size exchanges
              (terms and conditions apply).
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  100% original
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Clear product descriptions
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Best prices
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Fast shipping
                </h6>
              </div>
            </div>
          </Col>
          
          <Col lg="6">
            <div
              className={`${classes.about_img_gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about_img} ${classes.about_img_box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about_img} ${classes.about_img_box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about_img} ${classes.about_img_box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about_img} ${classes.about_img_box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>'
    </section>
  );
};

export default About;
