import { apiInterfaces } from "./apiInterfaces";
import { Api } from "../App";

export async function fetchData(url: string, api: Api) {
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