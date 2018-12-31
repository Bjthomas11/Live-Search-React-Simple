// improt react in
import React from "react";
// import css file
import "./character-count.css";

// create function that holds props
export default function CharacterCount(props) {
  // return html with number of characters user typed in input
  return (
    <span id="character-count" className="character-count" role="status">
      {props.count} Characters
    </span>
  );
}
