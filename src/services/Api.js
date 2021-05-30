import axios from 'axios'
import md5 from 'md5'

import { useEffect, useState } from 'react'

const baseUrl = 'http://gateway.marvel.com/v1/public/creators/32/comics'

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function Api(){
    const [request, setRequest] = useState([])
    useEffect(() =>{
        axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json)
        .then(data => setRequest(data))
        .catch(err => console.log(err))
    }, [])
}