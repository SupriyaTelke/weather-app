import React, { Component } from 'react';
import './App.css';
import {Title} from './components/title';
import {Form} from './components/form';
import {Weather} from './components/weather';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const Api_Key="5959396a0bd213f7c25fb4f079ecbbed";
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log('current weather',response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      <div>
        <Title />
        <Form loadWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
