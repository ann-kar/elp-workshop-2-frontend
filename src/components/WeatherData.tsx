import { IWeatherData } from "../App"
import "../styles/WeatherData.css";

export const WeatherData = ({ data }: { data: IWeatherData }) => {
    return (
        <div className="WeatherData">
            <div className="temperature">
                Temperature: <span id="temperature">{data.temperature}</span><span>&#8451;</span>
            </div>
            <div className="pressure">
                Pressure: <span id="pressure">{data.pressure}</span><span>&nbsp;hP</span>
            </div>
            <div className="humidity">
                Humidity: <span id="humidity">{data.humidity}</span><span>%</span>
            </div>
        </div>
    )
}