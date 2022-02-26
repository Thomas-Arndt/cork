import React from 'react';
import styles from './StickyNote.module.css';

const StickyNote = () => {
    return (
        <a href="#" className={styles.stickyNote} >
            <img src="#" className={styles.image} />
            <h6 className={styles.title}>Advertisement Title</h6>
            <p>$X.XX</p>
        </a>
    )
}

export default StickyNote;