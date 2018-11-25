import React from "react";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      cocktailSearch: "",
      results: []
    };
  }

  handleChange(event) {
    console.log(event.target);
    event.preventDefault();
    this.setState({ cocktailSearch: event.target.value });
  }

  allDrinksSearch(cocktailSearch) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearch}`
    )
      .then(function(response) {
        return response.json();
      })

      .then(body => {
        console.log(body);
        this.setState({ results: body.drinks });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.allDrinksSearch(this.state.cocktailSearch);
  }
  render() {
    return (
      <div className="App">
        <h1>Cocktail Finder</h1>
        <Search
          handleChange={this.handleChange}
          inputText={this.state.cocktailSearch}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
