import React from 'react'
import './style.scss'

const List = props => {

    return (
        <div className='List'>
            {
                props.obj.map(([key, value], index) => listCreator([key, value], index))
            }
        </div>
    )
}

const listCreator = ([key, value], index) => (
    <li
        key={index}
        className='List__item'
    >
        <span className='List__item-key'>
            {key}
        </span>
        <span className='List__item-value'>
            {value.join(', ')}
        </span>
    </li>
)

export default List

