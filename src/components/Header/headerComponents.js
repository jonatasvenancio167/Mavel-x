import React from 'react'
import styles from './HeaderComponents.module.css'

export default function HeaderComponents(){
    return(
        <div className={styles.navbar}>
            <img src='/marvel_Logo.png' />
            <input type='text' placeholder='Pesquise aqui!' className={styles.search}/>
        </div>
    )
}
