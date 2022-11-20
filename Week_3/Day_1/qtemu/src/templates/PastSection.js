import React from 'react'
import PastCard from '../organisms/PastCard'

const PastSection = (props) => {
    const {pasts} = props
    return pasts.map((past)=>{
        return(
            <PastCard date={past?.date} desc={past?.desc} visit={past?.visit}/>
        )
    })
}

export default PastSection