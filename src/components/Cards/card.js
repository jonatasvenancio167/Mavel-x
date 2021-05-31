import styles from './WikiComponent.module.css'
import Categories from './categories'

const Card = ({items}) => {
    return( 
        <div className={styles.grid}>
            {items.map(item => <Categories key={item.id} item={item}></Categories>)}
        </div>
    )
}

export default Card