import React from 'react'
import styles from './FilterBar.module.css'

const FilterBar = ({children}) => {



  return (
    <div className={`${styles.paper}`}>
        {children}
    </div>
)
}

export default FilterBar