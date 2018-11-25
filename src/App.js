import React, {Component} from 'react'
import Layout from './hoc/Layout'
import Main from './containers/Main'
import logo from './logo.svg'
import './App.scss'

class App extends Component {

    render() {
        return (
            <Layout className='App'>
                <div className='App__wrapper'>
                    <header className='App__bar'>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <h4>SDKs</h4>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </header>

                    <Main className='App__main' />

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
