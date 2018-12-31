// import react in
import React from "react";

// create function that holds props
export default function CharacterList(props) {
  // create variable that maps through array of characters and finds each character and the index them outputs an li with the index and showing name actor and description of all characters
  const characters = props.characters.map((character, index) => (
    <li key={index}>
      <strong>{character.name}</strong> ({character.actor}) -
      {character.description}
    </li>
  ));
  // return ul that holds all characters
  return <ul className="character-list">{characters}</ul>;
}
