import styles from './WikiComponent.module.css'
import Categories from './categories'

const Card = ({items, isLoading}) => {
    return( 
        isLoading ? <h1>Página não encontrada</h1> 
        : 
        <div className={styles.container} style={{ width: 200 }}>
            {items.map(item => <Categories key={item.id} item={item}></Categories>)}
        </div>
    )
}

export default Card