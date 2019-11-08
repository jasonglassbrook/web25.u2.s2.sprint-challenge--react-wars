/// external modules ///
import React from "react";
import {
  Card , CardImg , CardBody ,
  CardTitle , CardSubtitle , CardText
} from "reactstrap";

/// internal modules ///
import {
  getPronoun,
  conjugate as conj,
} from "../utils/persons";
import {
  capitalize as cap,
} from "../utils/strings";

/// styles ///
import "./StarWars.css";

/***************************************
  COMPONENTS
***************************************/
const PeopleCard = ({data}) => {
  const pro = getPronoun (data.gender);

  return (
    <Card className="people card">
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardText>
          {data.name} was born in {data.birth_year}. {cap (pro)} {conj (pro , "has")} {data.hair_color.toLowerCase ()} hair, {data.eye_color.toLowerCase ()} eyes, and {data.skin_color.toLowerCase ()} skin. {cap (pro)} {conj (pro , "is")} {data.mass}kg and {data.height}cm tall.
        </CardText>
      </CardBody>
    </Card>
  );
};

/**************************************/
export default PeopleCard;
