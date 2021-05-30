import styles from './WikiComponent.module.css'
import Card from './card'
import axios from 'axios'
import md5 from 'md5'

import Slide from 'react-slick'

import { useEffect, useState } from 'react'

const baseUrl = 'http://gateway.marvel.com/v1/public/creators/32/comics'

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function WikiComponent(){

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    }

    const[items, setItems] = useState([])
    const[isLoanding, setIsLoading] = useState(true)

    useEffect(() => {
        const fetch = async() => {
            const result = await axios((`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`))
            console.log(result.data)
            setItems(result.data.data.results)
            setIsLoading(false)
        }

        fetch()
    },[])

    return(
        <>
            <div className={styles.title}>
                <h1 className={styles.title}>Personagens</h1>
            </div>
            <Slide {...settings} className={styles.container}>
                <Card items={items} isLoanding={isLoanding} />
            </Slide>
        </>
    )
}

