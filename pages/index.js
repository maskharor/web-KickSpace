import { Fragment } from "react";
import Intro from "../components/UI/Intro";
import Carousel from "../components/UI/Carousel";
import Catalog from "../components/UI/Catalog";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Intro />
      <Catalog />
    </Fragment>
  );
}
