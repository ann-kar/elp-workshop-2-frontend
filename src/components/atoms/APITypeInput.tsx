import "../../styles/APITypeInput.css";

interface APITypeInputProps {
    value: "openweather" | "visual",
    label: "Open Weather API" | "Visual Crossing API",
    defaultChecked: boolean
}

export const APITypeInput = ({ value, label, defaultChecked }: APITypeInputProps) => {
    return (
        <>
            <input type="radio" className="APITypeInput-input" id={value} name={"api"} value={value} defaultChecked={defaultChecked} />
            <label className="APITypeInput-label" htmlFor={value}>use {label}</label>
        </>
    )
}