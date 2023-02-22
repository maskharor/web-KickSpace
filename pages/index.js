import { Fragment } from "react";
import Intro from "../components/UI/Intro";
import Carousel from "../components/UI/Carousel";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Intro />
    </Fragment>
  );
}
