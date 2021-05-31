import api from "../services/api";
import useSWR from "swr";

//<sumary>
// Criação da função useFetch que tem como objetivo realizar as requisições para a api e retornar com os resultados. 
// Utilizo o swr para realizar essas requisições e salvar os últimos dados em cache para o usuáio
//</sumary>

export function useFetch(url){
    const { data, error } = useSWR(url, async url => {
        const result = await api.get(url)
        const data = result.data.data.results
        return data
    })
    //<sumary>
    //   Eu retorno com os dados da minha requisição
    //</sumary>
    return { data, error }
}
