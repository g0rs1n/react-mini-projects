import { createContext } from "react";

export const ListsContext = createContext([])
export const ListsDispatchContext = createContext(null)
export const NewListsContext = createContext([])
export const NewListsDispatchContext = createContext(null)

export function listsReducer (lists, action) {
    switch (action.type) {
        case 'add_name': {
            let index = lists.length
            return [
                {
                    id: index++,
                    name: action.name,
                }, 
                ...lists
            ]
        }
        case 'rename_name': {
            return lists.map(currentList => currentList.id === action.id ? {
                ...currentList, name: action.name
            } : currentList)
        }
        case 'delete_name': {
            return lists.filter(item => item.id !== action.id)
        }
        case 'clear_list': {
            return []
        }
    
        default:
            return lists
    }
}

export function newListsReducer (newLists, action) {
    switch (action.type) {
        case 'remove_toNewLists': {
            let lists = action.lists
            return newLists = [
                ...lists.filter(item => item.id === action.id),
                ...newLists
            ]
        }
        case 'delete_item': {
            return newLists.filter(item => item.id !== action.id)
        }
        case 'clear_newList': {
            return []
        }

        default:
            return newLists
    }
}