import React, { useState } from 'react'
import styles from './DeleteForm.module.css'



const DeleteForm = () => {
    const [disabled, setDisabled] = useState(true)



    const handleChange = (e) => {
        if(e.target.value.toLowerCase() === "delete"){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

  return (

    <div className={`d-flex flex-column align-items-center p-4 ${styles.paper}`} >
        <h2 className='mt-2'>Are you sure you want to delete your Ad:</h2>
        <h4 className={styles.title}>Advertisement Title</h4>
            <div className={`d-flex justify-content-center mt-3 p-3 ${styles.container}`} >
                <form>
                    <div>
                        <div className='mb-3'>
                            <label for="deleteAd" className='mb-2'>Type "Delete" below to verify</label>
                            <input type="text" name="deleteAd" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className='d-flex justify-content-center my-3'>
                            <button className='btn btn-success px-3' disabled={disabled}>
                                Delete
                            </button>
                        </div>
                    </div> 
                </form>
        </div>
    </div>


  )
}



export default DeleteForm