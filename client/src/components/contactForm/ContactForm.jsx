import React from 'react'
import styles from './ContactForm.module.css'



const ContactForm = () => {




  return (


    <div className={`d-flex flex-column align-items-center ${styles.paper}`} >
    <h2 className={styles.title}>Contact The Owner</h2>
        <div className={`d-flex justify-content-center mt-2 p-3 ${styles.container}`} >
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
        </div>
    </div>

    
  )
}



export default ContactForm