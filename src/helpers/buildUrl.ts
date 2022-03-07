import { IStateFormData } from "../App";

export function buildUrl(formData:IStateFormData, setUrl: React.Dispatch<React.SetStateAction<string>>) {
    switch (formData.api) {
        case 'openweather':
          setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${formData.lat}&lon=${formData.lon}&appid=${process.env.REACT_APP_OPEN_KEY}`);
          return;
        case 'visual':
          setUrl(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formData.lat}%2C${formData.lon}?unitGroup=metric&include=current&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`);
          return;
      }
}