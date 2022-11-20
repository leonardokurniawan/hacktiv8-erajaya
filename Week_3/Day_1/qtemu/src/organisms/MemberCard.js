import React from 'react'
import Card from '../atoms/Card'
import MemberDetails from '../molecules/MemberDetails'
import './MemberCard.css'

const MemberCard = (props) => {
    const {title,name} = props
    return (
        <div className="member-card">
            <img className="member-img" src="" width="50px" height="50px"/>
            <MemberDetails title={title} name={name}/>
        </div>
    )
}

export default MemberCard