import React, { Component } from 'react'
import './Card.css';

import Card from '../Card';

const axios = require('axios');

export default class Clima extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cityInput: '',
            city: '',
            country: '',
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            wind: 0,
            humidity: 0,
            icon: '',
            icon_description: '',
            showCard: false
        }

        this.getDados = this.getDados.bind(this);
    }

    getDados() {

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&units=metric&APPID=6a11024847f4249d6938b935eb295c0e`)
            .then(res => {
                return res;
            }).then(json => {
                console.log(json.data);

                this.setState({
                    city: json.data.name,
                    country: json.data.sys.country,
                    temp: json.data.main.temp,
                    temp_min: json.data.main.temp_min,
                    temp_max: json.data.main.temp_max,
                    pressure: json.data.main.pressure,
                    wind: json.data.wind.speed,
                    humidity: json.data.main.humidity,
                    icon: `http://openweathermap.org/img/w/${json.data.weather[0].icon}.png`,
                    icon_description: json.data.weather[0].description,
                    showCard: true
                })

            })

    }

    render() {

        return (
            <div className="container">
                <div className="input-container">

                    <div>
                        <input className="input-search" type="text" onChange={(event) => { this.setState({ cityInput: event.target.value }) }} placeholder="ex: são paulo"></input>

                        <input className="buttom-search" type="button" value="Search" onClick={this.getDados}></input>
                    </div>

                </div>

                {this.state.showCard ? <Card
                                            city={this.state.city}
                                            country={this.state.country}
                                            pressure={this.state.pressure}
                                            wind={this.state.wind}
                                            humidity={this.state.humidity}
                                            icon={this.state.icon}
                                            icon_description={this.state.icon_description}
                                            temp={this.state.temp}
                                            temp_max={this.state.temp_max}
                                            temp_min={this.state.temp_min} /> : null}

            </div>
        )
    }
}
