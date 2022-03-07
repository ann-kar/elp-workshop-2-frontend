import "../../styles/CoordinatesInput.css";

export const CoordinatesInput = ({ name }: { name: "lat" | "lon" }) => {
    return (
        <div className="InputWrapper">
            <label htmlFor={name}>Enter {name.toUpperCase()}:</label>
            <input type="number"
                step="0.00001"
                name={name}
                id={name}
            />
        </div>
    )
}