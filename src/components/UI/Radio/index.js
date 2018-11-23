import React, {Component} from 'react'
import './style.scss'

class Radio extends Component {

    onChangeHandler = event => {
        console.log('event from radio', event.target.value);
        this.props.handleFilter(
            event.target.value === 'All'
                ? 'All'
                : event.target.value === 'Search'
                    ? 'Search'
                    : event.target.value
        )
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
                onChange={this.onChangeHandler}
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
                onChange={this.onChangeHandler}
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
                className='Radio__input'
                value='Search'
                name='radioList'
                onChange={this.onChangeHandler}
            >
            </input>
            <input
                type="search"
                placeholder='Search'
            />
        </label>
    )


    render() {
        return (
            <div>
                {this.inputSearch()}

                {this.inputAll()}

                {this.props.val.map((elem, index) => this.input(elem, index)
                )}
            </div>
        )
    }
}

export default Radio

