import React, {Component} from 'react'
import Layout from './hoc/Layout'
import Main from './containers/Main'
import logo from './logo.svg'
import './App.scss'
import getData from './utils/getArrayFromJSON'
import getUniqueValue from './utils/getUniqueValueFromArray'

class App extends Component {

    state = {
        objFromJson: [],
        valuesFromJson: [],
        objCurrent: []
    }

    componentDidMount() {
        let newArray;

        newArray = getUniqueValue(getData(), 1)
        newArray = Array.from(new Set(newArray)).sort()

        this.setState({
            objFromJson: getData(),
            valuesFromJson: newArray
        })
    }

    render() {
        return (
            <Layout className='App'>
                <div className='App__wrapper'>
                    <header className='App__bar'>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <h4>SDKs</h4>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </header>

                    <Main
                        className='App__main'
                        obj={this.state.objFromJson}
                        val={this.state.valuesFromJson}
                    >

                    </Main>

                    <footer className="App__bar">
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </footer>
                </div>
            </Layout>
        )
    }
}

export default App
