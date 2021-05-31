import styles from './WikiComponent.module.css'
import Categories from './categories'

//<sumary>
//    Realiza o mapeamento dos dados retornados da api atráves do items.  
//</sumary>

const Card = ({items}) => {
    return( 
        <div className={styles.grid}>
            {items.map(item => <Categories key={item.id} item={item}></Categories>)}
        </div>
    )
}

export default Card