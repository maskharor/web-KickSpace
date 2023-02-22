import React from "react";
import classes from "../../styles/catalog-item.module.css";
import Image from "next/image";
import Link from "next/link";

const CatalogItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.catalog_item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.catalog_keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.catalog_img}`}>
        <Image alt="portfolio-img" src={img} width="280" height="280" />
      </div>

      <div className={`${classes.catalog_live} bg-transparent`}>
        <button className="primary_btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
