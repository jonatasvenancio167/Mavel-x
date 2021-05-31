import api from "../services/api";
import useSWR from "swr";


export function useFetch(url){
    const { data, error } = useSWR(url, async url => {
        const result = await api.get(url)
        const data = result.data.data.results
        return data
    })
    return { data, error }
}
