import React from 'react';
import styles from './StickyNote.module.css';
import pushPin from '../../static/images/drawing-pin.png';

const StickyNote = ({ ad }) => {
    let image = null;
    if(ad.image === "Default_Image.png") {
        image = require(`../../static/images/${ad.image}`)
    } else {
        image = require(`../../static/images/adImages/${ad.image}`)
    }

    return (
        <a href={`/details/${ad.id}`} className={styles.stickyNote} >
            <img src={image} alt="Advertisement" className={styles.image} />
            <h6 className={styles.title}>{ad.title}</h6>
            <p>${ad.price.toFixed(2)}</p>
            <img src={pushPin} alt="Push Pin" className={styles.pin} />
        </a>
    )
}

export default StickyNote;