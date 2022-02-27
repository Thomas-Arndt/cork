import React from 'react'
import styles from './ContactForm.module.css'
import pushPin from '../../static/images/drawing-pin.png';
import { useHistory } from 'react-router-dom'


const ContactForm = () => {
    const history = useHistory()



    const submitHandler = (e) => {
        e.preventDefault();

        history.push(`/details/0`)
    }


  return (


    <div className={`d-flex flex-column align-items-center ${styles.paper}`} >
        <h2 className={styles.title}>Contact The Owner</h2>
        <div className={`d-flex justify-content-center mt-2 p-3 ${styles.container}`} >
            <form onSubmit={submitHandler}>
                <div>
                    <div className='mb-3'>
                        <label for="email" >Your Email</label>
                        <input type="email" name="email" className="form-control" />
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="45" rows="10" className="form-control" ></textarea>
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                        <button className='btn btn-success px-3'>
                            Send
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



export default ContactForm