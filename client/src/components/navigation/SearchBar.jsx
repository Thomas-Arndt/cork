import React from 'react'



const SearchBar = () => {


  return (


    <form>
        <div className='d-flex flex-column p-3'>
            <input type='text' className='form-control p-0 px-2' placeholder='Search Ads'/>
            <button className='btn btn-primary p-0 px-1 mt-2'>
                Go!
            </button>
        </div>
    </form>


  )
}



export default SearchBar