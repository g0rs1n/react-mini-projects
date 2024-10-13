import { useState } from "react"
import axios from "axios"

export default function Weather () {

    const [place, setPlace] = useState('')
    const [weather, setWeather] = useState([])
    
    const handleChangePlace = (e) => {setPlace(e.target.value)}

    return (
        <>
            <div className="wrapper">
                <form>
                    <label htmlFor="place">Enter Country,City,District</label>
                    <br />
                    <input onChange={handleChangePlace} type="text" id="place" name="place" />
                    <br />
                    <button>Check the Weather</button>
                </form>
            </div>
        </>
    )
}