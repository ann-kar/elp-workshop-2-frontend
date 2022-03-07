import { IWeatherData } from "../App"

export const WeatherData = ({ data }: { data: IWeatherData }) => {
    return (
        <div className="WeatherData">
            <div className="temperature">
                Temperature: <span id="temperature">{data.temperature}<span>&#8451;</span></span>
            </div>
            <div className="pressure">
                Pressure: <span id="pressure">{data.pressure} hP</span>
            </div>
            <div className="humidity">
                Humidity: <span id="humidity">{data.humidity}%</span>
            </div>
        </div>
    )
}