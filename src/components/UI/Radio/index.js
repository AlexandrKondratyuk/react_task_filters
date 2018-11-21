import React from 'react'
import './style.scss'

const Radio = props => {

    return (
        <div>
            {
                props.val.map((elem, index) => input(elem, index))
            }
        </div>
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

export default Radio

