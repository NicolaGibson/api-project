import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.props.handleChange}
            value={this.props.inputText}
            className="search-input"
            id="search-tf"
            placeholder="Enter cocktail name"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Search;
