import { useState, useEffect } from "react";

import { APITypeInput, CoordinatesInput, Button } from "./atoms/";
import { Api, IFormData, IStateFormData } from '../App';
import {validateCoordinates} from '../utils/validateCoordinates';

interface FormProps {
    setFormData: React.Dispatch<React.SetStateAction<IStateFormData | null>>
}

export const Form = ({ setFormData }: FormProps) => {

    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);
    const [api, setApi] = useState<Api>("openweather");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (api && lat && lon) {
            setFormData({ api, lat, lon });
        }
    }, [lat, lon, api])

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let { lat, lon, api } = e.target as typeof e.target & IFormData;
        if (validateCoordinates(lat.value,lon.value)) {
            setLat(lat.value);
            setLon(lon.value);
            setApi(api.value);
            setMsg("");
        } else {
            setMsg('Please fill correctly all the fields.');
        }
    }

    return (
        <form className="Form" onSubmit={e => submitForm(e)}>
            <div className="Form__inputs">
                <CoordinatesInput name={"lat"} />
                <CoordinatesInput name={"lon"} />
            </div>
            <div className="Form__toggle">
                <APITypeInput value={"openweather"} label={"Open Weather API"} defaultChecked={true} />
                <APITypeInput value={"visual"} label={"Visual Crossing API"} defaultChecked={false} />
            </div>
            <Button id={"submit"} label={"check"} />
            <small className="submit-message">{msg}</small>
        </form>
    )
}