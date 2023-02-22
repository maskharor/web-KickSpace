import SectionTitle from "./SectionTitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import introImg from "../../public/images/shoe-home.jpg";
import classes from "../../styles/intro.module.css";

const Intro = () => {
  return (
    <section className={`${classes.intro}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <SectionTitle subtitle="Hello" />
            <div className={`${classes.intro_content}`}>
              <h2 className="mt-3 mb-3">We are KickSpace</h2>
              <h5 className="mb-4">"Walk on Clouds with Our Comfortable Shoes"</h5>
              <p>
              Welcome to our website, the best place to find the right shoes for your style. We provide a wide range of shoes for women, men, and children from leading brands around the world.
              </p>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.intro_img} text-end`}>
              <Image alt="intro-image" src={introImg} width="400" height="400" />

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
