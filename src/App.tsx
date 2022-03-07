
import { useState } from "react";

import { Form, WeatherData, WeatherDataWrapper } from "./components";

export type Api = 'openweather' | 'visual';

export interface IWeatherData {
  temperature: number,
  humidity: number,
  pressure: number
}

export interface IFormData {
  lat: { value: number };
  lon: { value: number };
  api: { value: Api };
}

export interface IStateFormData {
  lat: number;
  lon: number;
  api: Api;
}

function App() {

  const [formData, setFormData] = useState<IStateFormData | null>(null);
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  return (
    <div className="App">
      <main>
        <Form setFormData={setFormData} />
        <WeatherDataWrapper>
          {weatherData && <WeatherData data={(weatherData)} />}
        </WeatherDataWrapper>
      </main>
    </div>
  );
}

export default App;
