import React, {Component} from 'react'
import Radio2 from '../../components/Radio'
import Radio from '../../components/UI/Radio'
import List from '../../components/UI/List'
import arrayFromJson from '../../utils/getArrayFromJSON'
import uniqueValue from '../../utils/getUniqueValueFromArray'
import filterByValue from '../../utils/filterByValue'
import './style.scss'

class Main extends Component {
    state = {
        arrayMain: [],
        arrayValuesUnique: [],
        arrayFiltered: []
    }



    handleFilter = param => {
        console.log('param',param);

        if (this.state.arrayValuesUnique.indexOf(param) >= -1) {
            let resArr = filterByValue(this.state.arrayMain, param)
            this.setState({
                arrayFiltered: resArr
            })
        } else {
            this.setState({
                arrayFiltered: this.state.arrayMain
            })
        }
    }


    componentDidMount() {
        let initialArr = arrayFromJson();
        let unique = uniqueValue(initialArr, 1)
        this.setState({
            arrayMain: initialArr,
            arrayValuesUnique: unique,
            arrayFiltered: initialArr
        })
    }


    render() {
        return (
            <div className='Main'>
                <div className='Main__nav'>
                    <Radio
                        obj={this.state.arrayFiltered}
                        val={this.state.arrayValuesUnique}
                        handleFilter={this.handleFilter}
                    />
                </div>

                <div className='Main__content'>
                    <ul className='Main__content-list'>
                        <List
                            obj={this.state.arrayMain}
                            val={this.state.arrayValuesUnique}
                            filteredObj={this.state.arrayFiltered}
                        />
                    </ul>
                </div>
            </div>
        )
    }
}



export default Main