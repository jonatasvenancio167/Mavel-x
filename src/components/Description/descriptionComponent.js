import { ptBR } from 'date-fns/locale'
import { useFetch } from '../../hooks/api'
import { parseISO, format } from 'date-fns'
import { useParams } from 'react-router-dom'

import md5 from 'md5'
import styles from './DescriptionComponent.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const publicKey = '29e3f9f7da374acf397275c7cbd2c2c2'
const privateKey = '1b45397d2d3e4442998ad48676ec2f152306317e'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

export default function DescriptionComponent(){
    //<sumary>
    //    O const id vai receber o valor do id que foi selecionado através do useParams()
    //    Após isso, realiazo uma chamada na api com o valor do id que foi recebido
    //</sumary>

    const { id } = useParams()
    const { data } = useFetch(`/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)

    //<sumary>
    //    Verifico se cheguei a receber algum dado da api, caso os dados não tenham chegado, aparece uma mensagem de carregando para o usuário.
    //</sumary>
    
    if(!data){
        <p>Carregando...</p>
    }
    console.log(data)

    //<sumary>
    //    Retorno a parte visual da página com todos os dados selecionados da api baseado no id selecionado 
    //</sumary>
    return(
        <>
            <ScrollAnimation animateIn='fadeIn'>
                <div className={styles.background}>
                    <div className={styles.history}>
                        {data?.map( item => <h1 key={item.id} item={item} className={styles.titleHistory}>  { item.title }  </h1> )}
                        {data?.map( item => <img key={item.id} item={item} src={`${item.thumbnail.path}/landscape_amazing.jpg`} className={styles.imageWallpaper} />  )}
                    </div>

                    <h1 className={styles.border}>Descrição</h1>
                    {data?.map(item => <p key={item.id} item={item} className={styles.paragraphFeature}> { item.description ? item.description : 'Descrição não fornecidos' } </p>)}
                </div>
                <div className={styles.tableFormat}>
                    <h1 className={styles.titleCuriosity}>Curiosidades</h1>

                    <section className={styles.date}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Número de páginas</th>
                                    {data?.map(item => <td key={item.id} item={item}> { item.pageCount ? item.pageCount : 'Dado não fornecido' } </td> )}
                                </tr>
                                <tr>
                                    <th>Modificado</th>
                                    {data?.map(item => <td key={item.id} item={item}> { item.modified ? format(parseISO(item.modified), 'd MMM yyy', {locale: ptBR}) : 'Dado não fornecido' } </td> )}
                                </tr>
                                <tr>
                                    <th>Formato</th>
                                    {data?.map( item => <td key={item.id} item={item}> { item.format ? item.format : 'Dado não fornecido' } </td> )}
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </ScrollAnimation>
        </>
    )
}