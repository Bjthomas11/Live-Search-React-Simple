import React from "react";
import "./character-count.css";

export default function CharacterCount(props) {
  return (
    <span id="character-count" className="character-count" role="status">
      {props.count} Characters
    </span>
  );
}
