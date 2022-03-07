export const CoordinatesInput = ({ name }: {name: "lat" | "lon"}) => {
    return (
        <div className="InputWrapper">
            <label htmlFor={name}>Enter {name.toUpperCase()}:</label>
            <input type="number"
                name={name}
                id={name}
            />
            <small></small>
        </div>
    )
}