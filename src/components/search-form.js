// import react in
import React from "react";

// create function for seachform that holds props
export default function SearchForm(props) {
  // return a form that has onsubmit event, use label and input with onchange method to get the target value of the input
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Search</label>&emsp;
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Type a name"
        onChange={e => props.onChange(e.target.value)}
      />
    </form>
  );
}
