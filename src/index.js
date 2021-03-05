import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './reducer'
import 'bootswatch/dist/darkly/bootstrap.min.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'




const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({ type: 'INC' })
store.dispatch({ type: 'ADD_NUM', payload: 100 })

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'))

