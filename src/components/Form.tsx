export const Form = () => {

    return (
        <form className="Form">
            <div className="Form__inputs">
                <div>
                    <label htmlFor="lat">Enter LAT:</label>
                    <input type="number"
                        name="lat"
                        id="lat"
                    />
                    <small></small>
                </div>
                <div>
                    <label htmlFor="lon">Enter LON:</label>
                    <input type="number"
                        name="lon"
                        id="lon"
                    />
                    <small></small>
                </div>
            </div>
            <div className="Form__toggle">
                <label htmlFor="openweather">use Open Weather API</label>
                <input type="radio" className="toggle" id="openweather" name="api" value="openweather" defaultChecked />
                <label htmlFor="visual">use Visual API</label>
                <input type="radio" className="toggle" id="visual" name="api" value="visual" />
            </div>
            <button id="submit" className="Form__submit">check</button>
            <small></small>
        </form>
    )
}