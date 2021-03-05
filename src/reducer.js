const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return { counter: state.counter + 1 }
        case 'DEC':
            return { counter: state.counter - 1 }
        case 'ADD_NUM':
            return { counter: state.counter + action.payload }
        default:
            return state
    }
}

export default reducer