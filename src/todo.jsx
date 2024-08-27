import { useState } from "react"

  function AnyName () {
    return (
      <>
        <h3>Oops...not found any name</h3>
      </>
    )
  }
  
  function NewList ({newList, key, newArray, setNewArray}) {

    const handleDelete = () => {
      setNewArray(
        newArray.filter(item => item.id !== newList.id)
      )
    }

    return (
      <>
        <div className="newlist-item">
            <h3 key={key}>Your name on newArr: {newList.name} </h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
      </>
    )
  }

  function YourList ({list, key, lists, setLists, newArray, setNewArray}) {
  
    const [button, setButton] = useState(true)
    const [newSave, setNewSave] = useState(list.name)
  
    const handleDelete = () => {
      setLists(
        lists.filter(item => item.id !== list.id)
      )
    }

    const handleSave = () => {
      setButton(!button)
      if (!button) {
        setLists(lists.map(currentList => {
          if (currentList.id === list.id){
            return ({
              ...currentList,
              name: newSave
            })
          } else return currentList
        }))
      }
    }

    const handleRemove = () => {
      setNewArray(newArr => {
        return newArr = [
          ...lists.filter(currentList => currentList.id === list.id),
          ...newArray
        ]
      })
      setLists(lists.filter(item => item.id !== list.id))
    }

    const handleInputChange = (e) => {
      setNewSave(e.target.value)
    }
  
    return (
      <>
          <div className='list-item'>
            <h3 key={key}>Your name: {list.name}</h3>
            {
              !button ? <input value={newSave} onChange={handleInputChange} type="text"/> : null
            }
            <button onClick={handleSave}>
              {button ? 'Change' : 'Save'}
            </button>
            {
              button ? <button onClick={handleDelete}>Delete</button> : null
            }
            {
              button ? <button onClick={handleRemove}>Remove to NewArr</button> : null
            }
          </div>
      </>
    )
  }
  
  function List () {
  
    const [newArray, setNewArray] = useState([])
    const [name, setName] = useState('')
    const [lists, setLists] = useState([])
    const [isNotEmpty, setIsNotEmpty] = useState(true)
  
    const handleChange = (e) => {
      setName(e.target.value)
    }
  
    const handleSubmit = () => {
      let index = lists.length
      if (name === '') {
        setIsNotEmpty(false)
      } else {
        setLists([
        {
          id: index++,
          name: name
        },
        ...lists
        ])
        setName('')
        setIsNotEmpty(true)
      }  
    }

    return (
      <>
        <div className='wrapper'>
          <div className='wrapper-form'>
              <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
                }}>
                <input name='name' type="text" value={name} onChange={handleChange} />
                <br />
                <button type='submit'>Send</button>
              </form>
          </div>
          <div className="wrapper-lists">
              <div className='wrapper-list'>
                {
                  lists.length === 0 ? <AnyName/> :
                  lists.map((list) => {
                        if (isNotEmpty) {
                          return (
                          <YourList
                            list = {list}
                            key={list.id}
                            lists = {lists}
                            setLists = {setLists}
                            newArray = {newArray}
                            setNewArray = {setNewArray}
                          />
                          )
                        }
                  })
                }
              </div>
              <div className="wrapper-list-new"> 
                {
                  newArray.map(newList => {
                    return (
                      <NewList
                        newList = {newList}
                        key={newList.id}
                        setNewArray = {setNewArray}
                        newArray = {newArray}
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

  export default List