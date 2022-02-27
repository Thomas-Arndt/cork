import React from 'react'
import { Link, useHistory } from 'react-router-dom'


const Back = () => {
    const history = useHistory()

    

  return (


    <button onClick={() => history.goBack()} className='btn btn-primary  p-0 px-3'>
        Back
    </button>


  )
}



export default Back