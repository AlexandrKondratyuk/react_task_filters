import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <header className="App__bar">
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <h4>SDKs</h4>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </header>
                </div>
                <div className="App__main">
                    <nav className='App__main-nav'>Left</nav>
                    <div className='App__main-content'>Right</div>
                </div>
                <div>
                    <footer className="App__bar">
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                        <img src={logo} className="App__bar-logo" alt="logo"/>
                    </footer>
                </div>
            </div>
        )
            ;
    }
}

export default App;
