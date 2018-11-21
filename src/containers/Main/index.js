import React, {Component} from 'react'
import Radio from '../../components/UI/Radio'
import List from '../../components/UI/List'
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
                    <ul className='Main__content-list'>
                        <List
                            obj={this.props.obj}
                            val={this.props.val}
                        />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main