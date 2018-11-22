import React, {Component} from 'react'
import Radio from '../../components/UI/Radio'
import List from '../../components/UI/List'
import './style.scss'

class Main extends Component {
    state = {
        visible: true,
        arrayFiltered: []
    }

    render() {
        let res = filterBy(this.props.obj, 'Tag1')
        console.log('res => ',res);
        // console.log('MAIN ', this.props);
        return (
            <div className='Main'>
                <div className='Main__nav'>
                    <Radio
                        obj={this.props.obj}
                        val={this.props.val}
                    />
                </div>

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

function filterBy(data, value) {
    console.log('filterBy => ', data);


    return data.filter (item =>  {
        console.log('item =>>> ',item[1]);
        // item[1].forEach(elem => elem.valueOf()) === value
        return item[1].forEach(elem => (elem.valueOf() === value))
    })
}

export default Main