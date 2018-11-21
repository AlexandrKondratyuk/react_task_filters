import React, {Component} from 'react'
import Radio from '../../components/UI/Radio'
import './style.scss'

class Main extends Component {
    render() {
        console.log('MAIN ', this.props);
        return (
            <div className='Main'>
                <nav className='Main__nav'>
                    <Radio
                        obj={this.props.obj}
                        val={this.props.val}
                    />
                </nav>

                <div className='Main__content'>
                    Right
                </div>
            </div>
        )
    }
}

export default Main