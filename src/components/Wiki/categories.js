import styles from './WikiComponent.module.css'
import { Link } from 'react-router-dom'

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Categories = ({item}) => {
    const id = `/descricao/${item.id}`

    return(
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={id}>
                        <button className={styles.view}>Visualizar perfil</button>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}


export default Categories

{/* <div className={styles.border}>
                <div className={styles.position}>
                    <img src={`${item.thumbnail.path}/portrait_fantastic.jpg`} alt={item.title} className={styles.imgSize}/>
                </div>
            </div>
            <div className={styles.body}>
                <h5>{item.title}</h5>
                <Link to='/descricao'>
                    <button className={styles.view}>Visualizar perfil</button>
                </Link>
            </div> */}