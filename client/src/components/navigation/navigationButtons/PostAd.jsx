import React from 'react'
import { Link } from 'react-router-dom'


const PostAd = () => {


  return (


    <button className='btn btn-primary  p-0 px-3'>
        {/* links to create new listing  view, ("/create")*/}
        <Link to={"#"} className='text-light text-decoration-none'>
            Post Ad
        </Link>
    </button>


  )
}



export default PostAd