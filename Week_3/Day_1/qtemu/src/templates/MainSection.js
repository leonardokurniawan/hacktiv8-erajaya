import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'

const MainSection = () => {
  return (
    <> 
        <img src="" width="250px" height="250px"/>
        <div className="main-desc">
        <h2>Hacktiv8 Meetup</h2>
        <div className='list'>
            <div className="label">
            <Text>Location</Text>
            <Text>Members</Text>
            <Text>Organizers</Text>
            </div>
            <div className="data">
            <Text>Jakarta, Indonesia</Text>
            <Text>1,078</Text>
            <Text>Adhy Wiranata</Text>
            </div>
        </div>
        <Button>
            Join Us
        </Button>
        </div>
    </>
  )
}

export default MainSection