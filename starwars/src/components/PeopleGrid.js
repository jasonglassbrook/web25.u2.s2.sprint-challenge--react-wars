/// external modules ///
import React from "react";
import {
  Container , Row , Col
} from "reactstrap";

/// internal modules ///
import PeopleCard from "./PeopleCard";

/// styles ///
import "./StarWars.css";

/***************************************
  COMPONENTS
***************************************/
const PeopleGrid = (props) => {
  return (
    <Container className="people grid card-deck">
      <Row>
        {props.people.map ((el) => (
          <Col key={el.url} xs="12" sm="6" md="4">
            <PeopleCard data={el}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

/**************************************/
export default PeopleGrid;
