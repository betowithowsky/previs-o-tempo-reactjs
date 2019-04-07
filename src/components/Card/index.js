import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return (
            <div className="card-container">

                <div className="temperature">

                    <img alt={this.props.icon_description} src={this.props.icon} />
                    <span className="temp">
                        {this.props.temp} °C
                        </span>

                    <span className="text-city">
                        {this.props.city}, {this.props.country}
                    </span>

                    <span><strong>Maxima:</strong> {this.props.temp_max} °C </span>
                    <span><strong>Minima:</strong> {this.props.temp_min} °C</span>
                </div>

                <div className="infos">

                    <p><strong>Pressao Atmosférica:</strong> {this.props.pressure} hPa</p>
                    <p><strong>Velocidade do Vento:</strong> {this.props.wind} Km/h</p>
                    <p><strong>Umidade Relativa:</strong> {this.props.humidity} UR</p>
                </div>

            </div>
        )
    }
}
