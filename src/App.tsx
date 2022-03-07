import { useEffect, useState } from "react";

import { Form, WeatherData } from "./components";
import { buildUrl } from "./helpers/buildUrl";
import { fetchData } from "./helpers/fetchData";
import "./styles/App.css";

export type Api = 'openweather' | 'visual';

export interface IWeatherData {
  temperature: number,
  humidity: number,
  pressure: number
}

export interface IStateFormData {
  lat: number;
  lon: number;
  api: Api;
}

function App() {

  const [formData, setFormData] = useState<IStateFormData | null>(null);
  const [url, setUrl] = useState<string>("");
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    if (formData?.lat && formData?.lon) {
      buildUrl(formData, setUrl);
    }
  }, [formData]);

  useEffect(() => {
    if (url && formData?.api) {
      fetchData(url, formData.api).then(res => res ? setWeatherData(res) : null);
      setUrl("");
    }
  })

  return (
    <div className="App">
      <main>
        <Form setFormData={setFormData} />
        {weatherData && <WeatherData data={(weatherData)} />}
      </main>
    </div>
  );
}

export default App;
