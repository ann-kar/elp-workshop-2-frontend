
import { useState } from "react";

import { Form, WeatherData, WeatherDataWrapper } from "./components";

export interface IWeatherData {
  temperature: number,
  humidity: number,
  pressure: number
}

function App() {

  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  return (
    <div className="App">
      <main>
        <Form />
        <WeatherDataWrapper>
          {weatherData && <WeatherData data={(weatherData)} />}
        </WeatherDataWrapper>
      </main>
    </div>
  );
}

export default App;
