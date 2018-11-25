import React, {Component} from 'react'
import Radio from '../../components/UI/Radio'
import List from '../../components/UI/List'
import arrayFromJson from '../../utils/getArrayFromJSON'
import uniqueValue from '../../utils/getUniqueValueFromArray'
import filterByValue from '../../utils/filterByValue'
import filterByRegex from '../../utils/filterByRegex'
import './style.scss'

class Main extends Component {
    state = {
        arrayMain: [],
        arrayValuesUnique: [],
        arrayFiltered: []
    }


    handleFilter = param => {
        if (this.state.arrayValuesUnique.indexOf(param) > -1) {
            console.log(1);
            let resArr = filterByValue(this.state.arrayMain, param)
            this.setState({
                arrayFiltered: resArr
            })
        } else if (param === 'All') {
            console.log(2);
            this.setState({
                arrayFiltered: this.state.arrayMain
            })
        } else {
            console.log(3);
            if (param === null || param === '') {
                this.setState({
                    arrayFiltered: this.state.arrayMain
                })
            } else {
                let resArr = filterByRegex(this.state.arrayMain, param)
                console.log('from regex param =', param);
                console.log('3.2resArr =', resArr);
                this.setState({
                    arrayFiltered: resArr
                })
            }
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