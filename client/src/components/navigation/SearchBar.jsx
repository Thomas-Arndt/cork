import React from 'react'



const SearchBar = () => {


  return (


    <form>
        <div className='p-3'>
            <input type='text' className='form-control' placeholder='Search'/>
            <button className='btn btn-primary my-2'>
                Search
            </button>
        </div>
    </form>


  )
}



export default SearchBar