import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import md5 from 'md5'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/api'
import styles from './DescriptionComponent.module.css'
import Slider from "react-slick"

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function DescriptionComponent(){

    const { id } = useParams()
    const { data } = useFetch(`/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)

    if(!data){
        <p>Carregando...</p>
    }
    console.log(data)
    return(
        <>
            <div className={styles.history}>
                {data?.map(
                    item => <h1 key={item.id} item={item} className={styles.titleHistory}> 
                        { item.title } 
                    </h1>
                )}
                {data?.map(
                    item => <img key={item.id} item={item} src={`${item.thumbnail.path}/landscape_amazing.jpg`} className={styles.imageWallpaper} /> 
                )}
            </div>
            <div className={styles.background}>
                <h1 className={styles.border}>Descrição</h1>
                {data?.map(
                    item => <p key={item.id} item={item} className={styles.paragraphFeature}> 
                        { item.description } 
                    </p>
                )}
            </div>
            <div className={styles.tableFormat}>
                <h1 className={styles.titleCuriosity}>Curiosidades</h1>

                <section className={styles.date}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Status</th>
                                <td>Morto</td>
                            </tr>
                            <tr>
                                <th>Inicio</th>
                                {data?.map(
                                    item => <td key={item.id} item={item}> 
                                        {
                                            item.start ? format(parseISO(item.start), 'd MMM yyy', {locale: ptBR}) : 'Dado não fornecido'
                                        }
                                    </td>
                                )}
                            </tr>
                            <tr>
                                <th>Fim</th>
                                {data?.map(
                                    item => <td key={item.id} item={item}>
                                        { 
                                            item.end ? format(parseISO(item.end), 'd MMM yyy', {locale: ptBR}) : 'Dado não fornecido'
                                        } 
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}