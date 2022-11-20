import './Button.css'

import React from 'react'

const Button = (props) => {
    const {variant,onClick} = props;

    return variant !== 'ghost' ?  (
        <div className='button' onClick={onClick}>{props.children}</div>
    ):(
        <a 
        href="/" 
        className='ghost-button' 
        onClick={(e)=>{
            e.preventDefault();
            onClick(e)
        }}>{props.children}</a>
    )
}

export default Button