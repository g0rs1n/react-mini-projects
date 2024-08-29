import { useState, useEffect} from "react"
import axios from "axios"

export default function Cats () {

    const [cats, setCats] = useState([])

    useEffect(() => {
        const funcGet = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
                setCats(response.data)
            } catch (error) {
                console.error('Error: error api', error)
            }
        }
        funcGet()
    }, [])

    return (
        <>
            <div className="wrapper">
                {
                    cats.length === 0 ? <h2>Loading...</h2> :
                    <Cat
                        cats={cats}
                    />
                }
            </div>
        </>
    )
}

function Cat ({cats}) {

    const [itemCats, setItemCats] = useState(0)

    const handleButtonDecrement = () => {
        itemCats === 0 ? setItemCats(cats.length - 1) : setItemCats(itemCats - 1)
    }

    const handleButtonIncrement = () => {
        itemCats === cats.length - 1 ? setItemCats(0) : setItemCats(itemCats + 1)
    }

    return (
        <>
            <div className="item-wrapper">
                <button onClick={handleButtonDecrement}>Prev</button>
                <img className="item-image" src={cats[itemCats].url} alt="img" />
                <button onClick={handleButtonIncrement}>Next</button>
            </div>
        </>
    )
}