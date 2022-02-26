import React from 'react'
import { Link } from 'react-router-dom'


const Browse = () => {


  return (


    <button className='btn btn-primary  p-0 px-2'>
        {/* links to show all view, ("/dashboard")*/}
        <Link to={"#"} className='text-light text-decoration-none'>
            Browse
        </Link>
    </button>


  )
}



export default Browse