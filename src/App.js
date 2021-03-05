import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {

    state = {
        counter: 0
    }

    clickHeandler = (value) => {
        this.setState({
            counter: this.state.counter + value
        })
    }

    render() {
        return (
            <div className='jumbotron'>
                <h1>{ this.state.counter }</h1>
                <hr/>
                <button
                    className='btn btn-primary mr-2'
                    onClick={ () => this.clickHeandler(-1) }>minus 1</button>

                <button
                    className='btn btn-primary'
                    onClick={ () => this.clickHeandler(1) }>plus 1</button>
            </div>
        )
    }
}

export default connect()(App)