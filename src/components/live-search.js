// import react and component in
import React, { Component } from "react";
// import searchform component
import SearchForm from "./search-form";
// import character count component
import CharacterCount from "./character-count";
// import character list component
import CharacterList from "./character-list";

// create class component with constructor that holds props then call super with props
export default class LiveSearch extends Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      searchTerm: ""
    };
  }

  // render a variable that filters through props of characters and the search term to lowercase
  render() {
    const characters = this.props.characters.filter(character =>
      character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    // return in html div with all the components with props passed in them.
    return (
      <div className="live-search">
        <SearchForm onChange={searchTerm => this.setState({ searchTerm })} />
        <CharacterCount count={characters.length} />
        <CharacterList characters={characters} />
      </div>
    );
  }
}
