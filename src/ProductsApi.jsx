import { useState, useEffect } from "react"
import axios from "axios"

export default function Products () {

    const [button, setButton] = useState(true)
    const [items, setItems] = useState([])

    useEffect(()=>{
        const funcItems = async () => {
            try {
                const response = await axios.get(`https://freetestapi.com/api/v1/products?limit=5`)
                setItems(response.data)
            } catch (error) {
                console.error('Error: error api', error)
            }
        }
        funcItems()
    },[])

    const handleButton = () => {
        setButton(!button)
    }

    return (
        <>
            <div className="wrapper">
                {
                    button ? <button onClick={handleButton}>Welcome to test API, click me to start</button> :
                    items.length === 0 ? <h2>Loading...</h2> :
                    items.map(item=>{
                        return (
                            <Item
                                item={item}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

function Item ({item, key}) {
    return (
        <>
            <div key={key} className="item">
                <img src={item.image} alt="img" />
                <br />
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <h2>Price: {item.price}</h2>
                <h2>Rating: {item.rating}</h2>
            </div>
        </>
    )
}