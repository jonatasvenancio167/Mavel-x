import axios from 'axios'

   //<sumary>
    //    Utilizo o axios para criar uma conexão com a minha api.
    //</sumary>

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics'
})

export default api