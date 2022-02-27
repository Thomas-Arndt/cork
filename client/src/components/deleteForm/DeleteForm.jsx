import React, { useState } from 'react'
import styles from './DeleteForm.module.css'
import pushPin from '../../static/images/drawing-pin.png';
import { useHistory } from 'react-router-dom'



const DeleteForm = () => {
    const history = useHistory()
    const [disabled, setDisabled] = useState(true)



    const handleChange = (e) => {
        if(e.target.value.toLowerCase() === "delete"){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        history.push('/')
    }


  return (

    <div className={`d-flex flex-column align-items-center p-4 ${styles.paper}`} >
        <h2 className='mt-2'>Are you sure you want to delete your Ad?</h2>
        <h4 className={styles.title}>Advertisement Title</h4>
        <div className={`d-flex justify-content-center mt-3 p-3 ${styles.container}`} >
            <form onSubmit={submitHandler}>
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
        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTL}`} />
        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinTR}`} />
        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBL}`} />
        <img src={pushPin} alt="Push pin" className={`${styles.pin} ${styles.pinBR}`} />
    </div>


  )
}



export default DeleteForm