import React from 'react'



const NavButtonsContainer = ({ children }) => {



  return (


    <div className='d-flex justify-content-between gap-2 p-3'>
        {children}
    </div>


  )
}



export default NavButtonsContainer