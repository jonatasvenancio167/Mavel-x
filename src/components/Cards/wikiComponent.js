import md5 from 'md5'
import Card from './card'
import Loader from "react-loader-spinner";
import styles from './WikiComponent.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

import { useFetch } from '../../hooks/api'

const baseUrl = 'http://gateway.marvel.com/v1/public/events'

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function WikiComponent(){

    const { data } = useFetch(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`)

    if(!data){
        return(
            <Loader
            type="TailSpin"
            color="#202020"
            height={50}
            width={50}
            timeout={3000}
            className={styles.spinner}
          />
        )
    }

    return(
        <>
            <div className={styles.title}>
                <h1 className={styles.title}>Personagens</h1>
            </div>
            <ScrollAnimation animateIn='fadeIn'>
                <Card items={data} />
            </ScrollAnimation>
        </>
    )
}

