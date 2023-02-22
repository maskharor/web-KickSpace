import React from "react";
import classes from "../../styles/title.module.css";

const SectionTitle = (props) => {
  return <h5 className={`${classes.section_title}`}>{props.subtitle}</h5>;
};

export default SectionTitle;
