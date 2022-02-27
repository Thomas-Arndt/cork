import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './TitleNote.module.css';

const TitleNote = () => {
    return (
        <a href="#" className={styles.paper} >
            <h1 className={styles.title}>Cork</h1>
        </a>
    )
}

export default TitleNote;