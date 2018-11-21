import React, {Component} from 'react'
import Layout from './hoc/Layout'
import Main from './containers/Main'
import logo from './logo.svg'
// import './App.scss'
import classes from './App.scss'

class App extends Component {
    state = {
        jsonInfo: []
    }

    render() {
        return (
            <Layout className="App">
                <div className="APP__top">
                    <header className="App__bar">
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <h4>SDKs</h4>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </header>
                </div>

                <Main>

                </Main>

                <div className="APP__bot">
                    <footer className="App__bar">
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </footer>
                </div>
            </Layout>
        )
            ;
    }
}

// const radio = (value) => (
//     <input type="radio" value={value} name={value}/>
// )

export default App
