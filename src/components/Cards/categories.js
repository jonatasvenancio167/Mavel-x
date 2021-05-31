import styles from './WikiComponent.module.css'
import { Link } from 'react-router-dom'

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//<sumary>
//    Constante que tem como função criar os cards com os dados retornados pela api através o item.
//</sumary>

const Categories = ({item}) => {
    //<sumary>
    //    Capturo o id selecionado através do button que faço no card, fazendo com quer ele renderiza a próxima pagina com os dados do id selecionado.   
    //</sumary>

    const id = `/descricao/${item.id}`

    return(
        <>
            <Card>
                <Link to={id}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={styles.typography}>
                                {item.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
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
