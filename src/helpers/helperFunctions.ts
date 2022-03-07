import { Api, IWeatherData } from "../App";

const apiInterfaces = {
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

export const helperFunctions = {
  fetchData: async (url: string, api: Api) => {
    return await fetch(url)
      .then(response => {
        if (!response.ok) { throw new Error('Fetching error') }
        return response.json()
      })
      .then(json => {
        return apiInterfaces[api](json)
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
