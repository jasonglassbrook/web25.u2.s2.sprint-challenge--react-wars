/// external modules ///
import React from "react";
import {
  Card , CardImg , CardBody ,
  CardTitle , CardSubtitle , CardText
} from "reactstrap";

/// styles ///
import "./StarWars.css";

/***************************************
  HELPERS
***************************************/
const getPronoun = (gender) => {
  switch (gender.toLowerCase ()) {
    case "female":
    case "f":
      return ("she");
    case "male":
    case "m":
      return ("he");
    default:
      return ("they");
  }
}

const capitalize = (s) => {
  return (s.charAt (0).toUpperCase + s.slice (1));
}

const conj = (pro , verb) => {
  switch (verb) {
    case "is":
      switch (pro) {
        case "i":
          return ("am");
        case "you":
          return ("are");
        case "she":
        case "he":
        case "it":
          return ("is");
        case "we":
          return ("are");
        case "yous":
        case "you all":
        case "y'all":
          return ("are");
        case "they":
          return ("are");
        default:
          return (verb);
      }
    case "was":
      switch (pro) {
        case "i":
          return ("was");
        case "you":
          return ("were");
        case "she":
        case "he":
        case "it":
          return ("was");
        case "we":
          return ("were");
        case "yous":
        case "you all":
        case "y'all":
          return ("were");
        case "they":
          return ("were");
        default:
          return (verb);
      }
    case "will be":
      return (verb);
    case "has":
      switch (pro) {
        case "i":
          return ("have");
        case "you":
          return ("have");
        case "she":
        case "he":
        case "it":
          return ("has");
        case "we":
          return ("have");
        case "yous":
        case "you all":
        case "y'all":
          return ("have");
        case "they":
          return ("have");
        default:
          return (verb);
      }
    case "had":
      return (verb);
    case "will have":
      return (verb);
    default:
      return (verb);
  }
}

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
          {data.name} was born in {data.birth_year}.
          {capitalize (pro)} {conj (pro , "has")} {data.hair_color.toLowerCase ()} hair, {data.eye_color.toLowerCase ()} eyes, and {data.skin_color.toLowerCase ()} skin.
          {capitalize (pro)} {conj (pro , "is")} {data.mass}kg and {data.height}cm tall.
        </CardText>
      </CardBody>
    </Card>
  );
};

/**************************************/
export default PeopleCard;
