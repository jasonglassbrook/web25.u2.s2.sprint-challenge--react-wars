/*******************************************************************************
  DEAL WITH PERSONS
*******************************************************************************/
/*--------------------------------------
  getPronoun
----------------------------------------
  - get a person's pronoun from gender
--------------------------------------*/
export const getPronoun = (gender) => {
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

/*--------------------------------------
  conjugate
----------------------------------------
  - conjugate verbs based on a pronoun
--------------------------------------*/
export const conjugate = (pro , verb) => {
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