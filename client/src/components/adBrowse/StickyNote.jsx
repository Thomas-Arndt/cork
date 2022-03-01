import React, { useState } from 'react';
import styles from './StickyNote.module.css';
import pushPin from '../../static/images/drawing-pin.png';

const StickyNote = ({ ad }) => {
    const image = require(`../../static/images/adImages/${ad.image}`)

    return (
        <a href={`/details/${ad.id}`} className={styles.stickyNote} >
            <img src={image} alt="Advertisement Image" className={styles.image} />
            <h6 className={styles.title}>{ad.title}</h6>
            <p>${ad.price}</p>
            <img src={pushPin} alt="Push Pin" className={styles.pin} />
        </a>
    )
}

export default StickyNote;