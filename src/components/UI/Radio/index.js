import React, {Component} from 'react'
import './style.scss'

class Radio extends Component {
    state = {
        regexValue: ''
    }

    onChangeRadioHandler = event => {
        this.props.handleFilter(
            event.target.value === 'Search'
                ? this.state.regexValue
                : event.target.value
        )
        this.setState({
            regexValue: event.target.value
        })
    }

    input = (elem, index) => (
        <label
            key={index}
            htmlFor='radioList'
            className='Radio'
        >
            <input
                type="radio"
                className='Radio__input'
                value={elem}
                name='radioList'
                // onChange={this.onChangeRadioHandler}
            >
            </input>
            {elem}
        </label>
    )

    inputAll = () => (
        <label
            htmlFor='radioList'
            className='Radio'
        >
            <input
                type="radio"
                className='Radio__input'
                value='All'
                name='radioList'
            >
            </input>
            All
        </label>
    )

    inputSearch = () => (
        <label
            htmlFor='radioList'
            className='Radio'
        >
            <input
                type="radio"
                className='Radio__input Search'
                value='Search'
                name='radioList'
            >
            </input>
            <input
                type="search"
                placeholder='Search'
                className='SearchValue'
            />
        </label>
    )


    render() {
        return (
            <div>
                <form
                    onChange={this.onChangeRadioHandler}
                    // onKeyDown={this.onChangeInputHandler}
                >
                    {this.inputSearch()}

                    {this.inputAll()}

                    {this.props.val.map((elem, index) => this.input(elem, index)
                    )}
                </form>

            </div>
        )
    }
}

export default Radio

