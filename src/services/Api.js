import axios from "axios";
import useSWR from "swr";


export function useFetch(url){
    const { data, error } = useSWR(url, async url => {
        const result = await axios(url)
        const data = result.data.data.results
        return data
    })
    return { data, error }
}
