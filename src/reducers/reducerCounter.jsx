
export function counterReducer (counter, action) {
    switch (action.type) {
        case 'increment': {
            return counter + 1
        }
        case 'decrement': {
            return counter - 1
        }    
            
        default:
            break;
    }
}
