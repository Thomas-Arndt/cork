import React from 'react'
import { Link, useHistory } from 'react-router-dom'


const Back = () => {
    const history = useHistory()


  return (


    <button className='btn btn-primary  p-0 px-3'>
        {/* uses history to travel back through user history */}
        Back
    </button>


  )
}



export default Back