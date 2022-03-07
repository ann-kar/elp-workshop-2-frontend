import { Api } from "../App";
import { apiInterfaces } from "./apiInterfaces";

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
  },
  validateCoordinates: (lat: number, lon: number) => {
    return (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) ? true : false
  }
}
