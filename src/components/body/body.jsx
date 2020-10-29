import React, { Component } from "react";
import Search from "./search-panel/Search";
import WeatherCard from "./weather-card/WeatherCard";
import key from "./key";
import "./body.css";

export default class Body extends Component {
  state = {
    city: "",
    weatherObj: null,
    isCityDisplayed: false,
  };
  setCity = (event) => {
    const { value: city } = event.target;
    this.setState({ city });
  };
  closeCity = () => {
    this.setState({ isCityDisplayed: !this.state.isCityDisplayed });
  };
  handleSubmitForm = async () => {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ weatherObj: res });
      });

    this.setState({ city: "" });
    console.log(this.state.weatherObj);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <Search
              city={this.state.city}
              setCity={this.setCity}
              handleSubmitForm={this.handleSubmitForm}
            />
            <WeatherCard obj={this.state.weatherObj} />
          </div>
        </div>
      </div>
    );
  }
}
