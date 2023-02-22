import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Slider from "react-slick";
import classes from "../../styles/carousel.module.css";

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12">
            <Slider {...settings}>
              <div className={`${classes.carousel_item}`}>
                <div className={`${classes.carousel_client}`}>
                  <Image
                    alt="client-img"
                    src="/images/carousel-image1.jpg"
                    width="1600"
                    height="572"
                    className=" rounded-2"
                  />
                </div>
              </div>

              <div className={`${classes.carousel_item}`}>
                <div className={`${classes.carousel_client}`}>
                  <Image
                    alt="client-img"
                    src="/images/carousel-image2.jpg"
                    width="1600"
                    height="572"
                    className=" rounded-2"
                  />
                </div>
              </div>

              <div className={`${classes.carousel_item}`}>
                <div className={`${classes.carousel_client}`}>
                  <Image
                    alt="client-img"
                    src="/images/carousel-image3.jpg"
                    width="1600"
                    height="572"
                    className=" rounded-2"
                  />
                </div>
              </div>

              
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Carousel;
