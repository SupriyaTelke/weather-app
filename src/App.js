import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import {Grid, Cell} from 'react-mdl';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country:undefined,
    minTemp: undefined,
    maxTemp: undefined,
    wind: undefined,
    date: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    Api_Key:"5959396a0bd213f7c25fb4f079ecbbed",
  }

  changeState = (response) => {
    if(response.cod === 200){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        minTemp: response.main.temp_min,
        maxTemp: response.main.temp_max,
        wind: response.wind.speed,
        date: response.dt,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }
    else {
      this.setState({
        error: "Please enter correct values..."
      })
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const Api_Key=this.state.Api_Key;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const response = await api_call.json();
    console.log('current weather',response);
    this.changeState(response);
  }
    
  toFahrenheit = async () => {
    const Api_Key=this.state.Api_Key;
    const city = this.state.city;
    const country = this.state.country;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);
    const response = await api_call.json();
    console.log('current weather',response);
    this.changeState(response);
  }

  toCelcius = async () => {
    const Api_Key=this.state.Api_Key;
    const city = this.state.city;
    const country = this.state.country;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const response = await api_call.json();
    console.log('current weather',response);
    this.changeState(response);
  }

  render() {
    return (
        <Grid className="main-grid">
          <Cell col={5}>
            <div>
              <Title />
            </div>
          </Cell>
          <Cell col={7}>
            <div className="right-grid">
              <Form loadWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                minTemp={this.state.minTemp}
                maxTemp={this.state.maxTemp}
                wind={this.state.wind}
                description={this.state.description}
                error={this.state.error}
                toFahrenheit={this.toFahrenheit}
                toCelcius={this.toCelcius}
                />
            </div>
          </Cell>
        </Grid>
    );
  }
}

export default App;
