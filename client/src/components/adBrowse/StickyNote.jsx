import React from 'react';
import styles from './StickyNote.module.css';
import pushPin from '../../static/images/drawing-pin.png';

const StickyNote = ({ ad }) => {
    return (
        <a href="/details/0" className={styles.stickyNote} >
            <img src={ad.image} className={styles.image} />
            <h6 className={styles.title}>{ad.title}</h6>
            <p>${ad.price}</p>
            <img src={pushPin} alt="Push Pin" className={styles.pin} />
        </a>
    )
}

export default StickyNote;