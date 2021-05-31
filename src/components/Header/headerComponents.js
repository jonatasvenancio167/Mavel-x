import React from 'react'
import styles from './HeaderComponents.module.css'

   //<sumary>
    //    Criação do meu navbar
    //</sumary>

export default function HeaderComponents(){
    return(
        <div className={styles.navbar}>
            <img src='/marvel_Logo.png' />
        </div>
    )
}
