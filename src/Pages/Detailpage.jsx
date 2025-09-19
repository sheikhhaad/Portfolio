import React from 'react'
import { useParams } from 'react-router-dom'

const Detailpage = () => {
    let param = useParams()
    console.log(param);
    
    
  return (

    <div>Detailpage</div>
  )
}

export default Detailpage