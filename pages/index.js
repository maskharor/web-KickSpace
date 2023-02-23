import { Fragment } from "react";
import Intro from "../components/UI/intro";
import Carousel from "../components/UI/Carousel";
import Catalog from "../components/UI/Catalog";
import About from "../components/UI/About";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Intro />
      <Catalog />
      <About />
    </Fragment>
  );
}
