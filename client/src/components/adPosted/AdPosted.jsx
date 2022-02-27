import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdPosted.module.css'

const AdPosted = () => {
    return (
        <div className={styles.paper}>
            <h2 className={styles.title} >Your Ad Has Been Posted!</h2>
            <Link className={`btn btn-secondary ${styles.viewNow}`} >View It Now</Link>
            <h5 className={styles.message}>An email has been sent to the address you provided<br></br> that contains links to manage your ad.</h5>
            <h4>Thank you!</h4>
        </div>
    )
}

export default AdPosted;