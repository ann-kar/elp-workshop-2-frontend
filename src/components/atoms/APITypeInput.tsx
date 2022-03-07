
interface APITypeInputProps {
    value: "openweather" | "visual",
    label: "Open Weather API" | "Visual Crossing API",
    defaultChecked: boolean
}

export const APITypeInput = ({ value, label, defaultChecked }: APITypeInputProps) => {
    return (
        <>
            <label htmlFor={value}>use {label}</label>
            <input type="radio" className="toggle" id={value} name={"api"} value={value} defaultChecked={defaultChecked} />
        </>
    )
}