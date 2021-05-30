import { Link } from 'react-router-dom'
import TypeWrite from '../TypeWriter/index'
import styles from './WelcomeComponent.module.css'

export default function WelcomeComponent(){
    
    return(
        <>
            <div className={styles.position}>
                <div className={styles.col}>
                    <h1 className={styles.title}>
                        <TypeWrite text='Seja bem vindo ao mundo dos heróis da Marvel' /> 
                    </h1>
                </div>
            </div>
            <div className={styles}>
                <Link to='sobre'>
                    <button className={styles.button}>Enviar</button>
                </Link>
            </div>
        </>
    )
}