import styles from './WikiComponent.module.css'
import Card from './card'
import md5 from 'md5'
import slick_setting from './slick_setting'
import Slider from "react-slick"

import { useFetch } from '../../services/Api'

const baseUrl = 'http://gateway.marvel.com/v1/public/creators/32/comics'

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function WikiComponent(){

    const { data } = useFetch(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`)

    if(!data){
        return <p>Carregando...</p>
    }

    return(
        <>
            <div className={styles.title}>
                <h1 className={styles.title}>Personagens</h1>
            </div>
            <Slider {...slick_setting} className={styles.container}>
                <Card items={data} />
            </Slider>
        </>
    )
}

