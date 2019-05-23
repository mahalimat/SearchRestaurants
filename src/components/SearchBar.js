import React from "react";
import "./App.css";

class SearchBar extends React.Component {
  state = { city: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.city);
  };

  onInputChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="searchInput">Enter the city:</label>
            <input
              id="searchInput"
              type="text"
              aria-label="search"
              aria-required="true"
              value={this.state.city}
              onChange={this.onInputChange}
              name="search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
