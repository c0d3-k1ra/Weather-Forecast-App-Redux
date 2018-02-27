import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const id = cityData.city.id;
        const name = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        
        return (
            <tr key={id}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temperatures} color="Magenta" units="K" />
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="orange" units="%"/>
                </td>
                
            </tr>

        );
    }

    render() {
        return (
            <div className="myDiv">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr className="bg-primary" >
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = ({ weather }) => {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);