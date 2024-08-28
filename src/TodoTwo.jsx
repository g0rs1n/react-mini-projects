import { useReducer, useContext, useState, useEffect } from "react"
import { ListsContext, ListsDispatchContext, listsReducer, 
        newListsReducer, NewListsContext, NewListsDispatchContext
} from "./reducers/reducerTodo"

export default function ListTwo () {

    return (
        <>
            <ListProvider>
                <List/>
            </ListProvider>
        </>
    )
}


function ListProvider ({children}) {

    const [lists, dispatch] = useReducer(listsReducer, [])
    const [newLists, dispatchNewLists] = useReducer(newListsReducer, [])
    const [name, setName] = useState('')

    const handleButtonClear = () => {
        dispatch({
            type: 'clear_list'
        })
    }

    const handleButtonClearNew = () => {
        dispatchNewLists({
            type: 'clear_newList'
        })
    }

    useEffect(()=>{
        console.log("Welcome to ToDo List")
    },[])

    return (
        <>
            <ListsContext.Provider value={lists}>
                    <ListsDispatchContext.Provider value={dispatch}>
                        <NewListsContext.Provider value={newLists}>
                            <NewListsDispatchContext.Provider value={dispatchNewLists}>
                                <div className="wrapper">
                                    <form onSubmit={(e) => {
                                            e.preventDefault()
                                            dispatch({
                                                type: 'add_name',
                                                name: name
                                            })
                                            setName('')
                                        }}>
                                        <input value={name} onChange={(e) => {
                                            setName(e.target.value)
                                        }} type="text"  />
                                        <br />
                                        <button type="submit">Add</button>
                                    </form>
                                    <button onClick={handleButtonClear}>Clear list</button>
                                    <button onClick={handleButtonClearNew}>Clear newList</button>
                                    <div className="lists">
                                        {children}
                                    </div>
                                </div>
                            </NewListsDispatchContext.Provider>
                        </NewListsContext.Provider>
                    </ListsDispatchContext.Provider>
            </ListsContext.Provider>
        </>
    )
}


function List () {

    const lists = useContext(ListsContext)
    const newLists = useContext(NewListsContext)

    return (
        <>
            <div className="wrapper-lists">
                <div className="wrapper-list-1">
                    {
                        lists.map(list => {
                            return (
                                <ItemList
                                list = {list}
                                key = {list.id}
                                />
                            )
                        })
                    }
                </div>
                <div className="wrapper-list-2">
                    {
                        newLists.map(list => {
                            return (
                                <NewItemList
                                list = {list}
                                key = {list.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


function ItemList ({list, key}) {

    const lists = useContext(ListsContext)
    const dispatchLists = useContext(ListsDispatchContext)
    const dispatchNewLists = useContext(NewListsDispatchContext)
    const [button, setButton] = useState(true)
    const [newName, setNewName] = useState('')


    const handleButtonClick = () => {
        setButton(!button)
        if (!button) {
            dispatchLists({
                type: 'rename_name',
                id: list.id,
                name: newName,
            })
        }
    }

    const handleButtonRemove = () => {
        dispatchNewLists({
            type: 'remove_toNewLists',
            id: list.id,
            lists: lists
        })
        dispatchLists({
            type: 'delete_name',
            id: list.id
        })
    }

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    const handleDelete = () => {
        dispatchLists({
            type: 'delete_name',
            id: list.id,
        })
    }


    return (
        <>
            <div key={key} className="list">
                <h2>Your name: {list.name}</h2>
                {!button ? <input onChange={handleNewName} type="text"/> : null}
                <button onClick={handleButtonClick}>
                    {button ? 'Change' : 'Save'}
                </button>
                {
                    button ? <button onClick={handleButtonRemove}>Remove to newList</button> : null
                }
                {
                    button ? <button onClick={handleDelete}>Delete</button> : null
                }
            </div>
        </>
    )
}

function NewItemList ({list, key}) {

    const dispatchNewLists = useContext(NewListsDispatchContext)

    const handleButtonDelete = () => {
        dispatchNewLists({
            type: 'delete_item',
            id: list.id
        })
    }

    return (
        <>
            <div key={key} className="newList">
                <h2>Your name in newList: {list.name}</h2>
                <button onClick={handleButtonDelete}>Delete</button>
            </div>
        </>
    )
}