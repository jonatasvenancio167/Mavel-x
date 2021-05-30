import styles from './WikiComponent.module.css'
import { Link } from 'react-router-dom'

const Categories = ({item}) => {
    return(
        <>
            <div className={styles.border}>
                <div className={styles.position}>
                    <img src={`${item.thumbnail.path}/portrait_fantastic.jpg`} alt={item.title} className={styles.imgSize}/>
                </div>
            </div>
            <div className={styles.body}>
                <h5>{item.title}</h5>
                <Link to='/descricao'>
                    <button className={styles.view}>Visualizar perfil</button>
                </Link>
            </div>
        </>
    )
}


export default Categories