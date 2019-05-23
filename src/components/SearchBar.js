import React from "react";

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
            <label>Enter the city:</label>
            <input
              type="text"
              value={this.state.city}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
