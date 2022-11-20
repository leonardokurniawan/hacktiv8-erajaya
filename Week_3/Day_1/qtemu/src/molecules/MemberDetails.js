import React from 'react'
import Text from '../atoms/Text'
import './MemberDetails.css'

const MemberDetails = (props) => {
    const {title,name} = props
    return (
        <div className='member-details'>
            <b>{title}</b>
            <div className='detail'>
            <Text>{name}</Text>
            </div>
        </div>
    )
}

export default MemberDetails