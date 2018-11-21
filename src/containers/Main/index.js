import React, {Component} from 'react'
import classes from './style.scss'

class Main extends Component {
    render() {
        return (
            <div className={classes.Main}>
                <div className="App__main">
                    <nav className='App__main-nav'>
                        {radio('test')}
                        {radio('test2')}
                        {radio('test3')}
                        {radio('test4')}
                    </nav>
                    <div className='App__main-content'>Right</div>
                </div>
            </div>
        )
    }
}

const radio = (value) => (
    <label htmlFor="radioList" className={classes.radio}>
        <input type="radio" value={value} name="radioList"/>
        {value}
    </label>
)

export default Main