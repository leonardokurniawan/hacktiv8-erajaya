import React from 'react'
import MemberCard from '../organisms/MemberCard'

const MemberSection = (props) => {
    const {showMore,organizers} =props
  return (
    <div>
    {showMore ? (
      organizers.map((dt)=>{
        return (
          <MemberCard title={dt?.title} name={dt?.name}/>
      )})
    ):(
      <div className="member-section">
          <img src="" width="50px" height="50px"/>
          <div className='member-details'>
            <b>Organizers</b>
            <div className='detail'>
              <span>Adhy WIranata</span>
              <span>{organizers?.length-1} others.</span>
            </div>
          </div>
        </div>
    )}</div>
  )
}

export default MemberSection