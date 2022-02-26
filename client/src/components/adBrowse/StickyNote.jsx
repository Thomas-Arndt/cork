import React from 'react';
import styles from './StickyNote.module.css';

const StickyNote = ({ ad }) => {
    return (
        <a href="#" className={styles.stickyNote} >
            <img src={ad.image} className={styles.image} />
            <h6 className={styles.title}>{ad.title}</h6>
            <p>${ad.price}</p>
        </a>
    )
}

export default StickyNote;