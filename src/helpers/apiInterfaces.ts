import { IWeatherData } from "../App";

export const apiInterfaces = {
    openweather: (res: any) => <IWeatherData>({
        temperature: Math.round((res.main?.temp - 273.15) * 10) / 10,
        pressure: res.main?.pressure,
        humidity: res.main?.humidity
    }),
    visual: (res: any) => <IWeatherData>({
        temperature: res.currentConditions?.temp,
        pressure: res.currentConditions?.pressure,
        humidity: res.currentConditions?.humidity
    })
}
