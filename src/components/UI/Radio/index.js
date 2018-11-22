import React from 'react'
import './style.scss'

const Radio = props => {

    return (
        <form>
            {inputSearch()}
            {inputAll()}
            {props.val.map((elem, index) => input(elem, index))}
        </form>
    )
}

const input = (elem, index) => (
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
        >
        </input>
        {elem}
    </label>
)

const inputAll = () => (
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

const inputSearch = () => (
    <label
        htmlFor='radioList'
        className='Radio'
    >
        <input
            type="radio"
            className='Radio__input'
            value='Search'
            name='radioList'
        >
        </input>
        <input
            type="search"
            placeholder='Search'
        />
    </label>
)

export default Radio

