import { APITypeInput, CoordinatesInput, Button } from "./atoms/";

export const Form = () => {

    return (
        <form className="Form">
            <div className="Form__inputs">
                <CoordinatesInput name={"lat"} />
                <CoordinatesInput name={"lon"} />
            </div>
            <div className="Form__toggle">
                <APITypeInput value={"openweather"} label={"Open Weather API"} defaultChecked={true} />
                <APITypeInput value={"visual"} label={"Visual Crossing API"} defaultChecked={false} />
            </div>
            <Button id={"submit"} label={"check"} />
            <small></small>
        </form>
    )
}