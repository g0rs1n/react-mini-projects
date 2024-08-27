import { useState } from "react"


function Item ({item, key}) {

    const [button, setButton] = useState(true)

    const handleClick = () => {
        setButton(!button)
    }

    return (
        <>
            <div key={key} className="item">
                <h3 className="item__h3">{item.title}</h3>
                {
                    button ? 
                    <button onClick={handleClick}>Show</button> : 
                    (<>
                    <p className="item__p">
                        {item.text}
                    </p>
                    <br />
                    <button onClick={handleClick}>Hide</button>
                    </>)
                }
            </div>
        </>
    )
}


export default function Accardeon () {

    const dataItem = [
        {
            id: 1,
            title: 'Item-1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos modi maiores excepturi, perspiciatis delectus? Doloremque, deserunt soluta ipsa quod culpa autem aliquam delectus iure voluptatum in molestiae debitis alias?',
        },
        {
            id: 2,
            title: 'Item-2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos modi maiores excepturi, perspiciatis delectus? Doloremque, deserunt soluta ipsa quod culpa autem aliquam delectus iure voluptatum in molestiae debitis alias?',
        },
        {
            id: 3,
            title: 'Item-3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos modi maiores excepturi, perspiciatis delectus? Doloremque, deserunt soluta ipsa quod culpa autem aliquam delectus iure voluptatum in molestiae debitis alias?',
        }
    ]



    return (
        <>
            <div className="wrapper">
                <div className="accardeon">
                    <h1>Accardeon</h1>
                    <div className="accardeon-items">
                        {
                            dataItem.map(item => {
                                return (
                                    <Item
                                    item = {item}
                                    key={item.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}