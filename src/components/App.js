import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants, setRefineField } from "../actions";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import RefineBar from "./RefineBar";
import "./App.css";

class App extends Component {
  onSearchSubmit = city => {
    console.log(this.props);
    this.props.fetchRestaurants(city);
  };

  onRefineFieldChange = event => {
    console.log(event);
    console.log(this.props);
    this.props.setRefineField(event.target.value);
  };

  render() {
    const { restaurants = [], refineField } = this.props;
    const filteredRestuarants = !restaurants.length
      ? restaurants
      : restaurants.filter(restaurant => {
          return (
            restaurant.name.toLowerCase().includes(refineField.toLowerCase()) ||
            restaurant.address
              .toLowerCase()
              .includes(refineField.toLowerCase()) ||
            restaurant.area.toLowerCase().includes(refineField.toLowerCase())
          );
        });

    return !restaurants.length ? (
      <div className="container bgimage">
        <header>
          <h3>Search Resturants</h3>
        </header>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    ) : (
      <div className="container bgimage">
        <header>
          <h3>Search Resturants</h3>
        </header>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <RefineBar refineChange={this.onRefineFieldChange} />

        <CardList restaurants={filteredRestuarants} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    refineField: state.refines.refineField
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurants, setRefineField }
)(App);
