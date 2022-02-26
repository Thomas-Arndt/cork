import React from 'react'




const AdDetails = () => {


  return (

            <div className='container mt-5 py-5 shadow d-flex flex-column align-items-center' style={{width: "800px", height: "600px", backgroundColor:'#FFFFF0'}}>
                <h3 className='mb-3'> Advertisement Title </h3>
                    <div className='d-flex  mt-3 p-3 ' style={{width: '600px', height: '350px'}}>
                        <div className='d-flex  p-3'>
                            <div className='border border-black rounded-3' style={{width: '250px', height: '250px', backgroundColor:'white'}}>
                                <img src="na" alt="image" />
                            </div>
                        </div>
                        <div className='d-flex flex-column  mx-auto '>
                            <div className='d-flex align-items-center mt-3'>
                                Category
                            </div>
                            <div className='d-flex align-items-center'>
                                city, state
                            </div>
                            <div className='d-flex align-items-center'>
                                $ 1,000.00
                            </div>
                            <button className='btn btn-primary d-flex align-items-center'>
                                Contact
                            </button>
                        </div> 
                    </div>
                        <div className='d-flex stretch rounded-3' >
                            <p className='border' style={{width: '550px', height: 'auto'}}>
                                Description
                            </p>
                        </div>

            </div>
  )
}

export default AdDetails