import React, { useState } from 'react';
import styles from './StickyNote.module.css';
import pushPin from '../../static/images/drawing-pin.png';

const StickyNote = ({ ad }) => {
    let image = null;
    if(ad.image){
        image = require(`../../static/images/adImages/${ad.image}`)
    } else {
        image = "na"
    }

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