import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/catalog.module.css";
import CatalogItem from "./CatalogItem";

import catalogData from "../data/catalog";

const Catalog = () => {
  const [filter, setFilter] = useState("Nike");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Nike") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Adidas") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Converse") {
      const filteredData = catalogData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab_btn_active}`;

  return (
    <section id="catalog">
      <Container>
        <hr></hr>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <h4 className="mt-4">Catalog Of Shoes</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab_btns} text-end`}>
              <button
                className={` ${
                  filter === "Nike" ? active : ""
                } secondary_btn text-white`}
                onClick={() => setFilter("Nike")}
              >
              <strong>NIKE</strong>
              </button>
              <button
                className={`${
                  filter === "Adidas" ? active : ""
                } secondary_btn text-white`}
                onClick={() => setFilter("Adidas")}
              >
                <strong>ADIDAS</strong>
              </button>
              <button
                className={` ${
                  filter === "Converse" ? active : ""
                } secondary_btn text-white`}
                onClick={() => setFilter("Converse")}
              >
                <strong>CONVERSE</strong>
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="3  " md="4" sm="6" key={item.id}>
              <CatalogItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Catalog;
