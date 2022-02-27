import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdPosted.module.css';
import pushPin from '../../static/images/drawing-pin.png';

const AdPosted = () => {
    return (
        <div className={styles.paper}>
            <h2 className={styles.title} >Your Ad Has Been Posted!</h2>
            <Link to="/details/0" className={`btn btn-secondary ${styles.viewNow}`} >View It Now</Link>
            <h5 className={styles.message}>An email has been sent to the address you provided<br></br> that contains links to manage your ad.</h5>
            <h4>Thank you!</h4>
            <img src={pushPin} alt="Push pin" className={styles.pin} />
        </div>
    )
}

export default AdPosted;