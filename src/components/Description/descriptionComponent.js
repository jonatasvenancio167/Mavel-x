import styles from './DescriptionComponent.module.css'

export default function DescriptionComponent(){
    return(
        <>
            <div className={styles.history}>
                <h1 className={styles.titleHistory}>História</h1>
                <p className={styles.paragraphHistory}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fermentum iaculis eu non diam phasellus. Velit dignissim sodales ut eu sem integer. Urna nunc id cursus metus aliquam eleifend mi in nulla. Sit amet purus gravida quis. At elementum eu facilisis sed odio. Tellus mauris a diam maecenas. Nunc eget lorem dolor sed viverra ipsum. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae elementum curabitur vitae nunc. Mi quis hendrerit dolor magna.</p>
            </div>
            <div className={styles.background}>
                <h1 className={styles.border}>Caracteristica</h1>
                <p className={styles.format}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum. Nullam ac tortor vitae purus faucibus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit. Lacus laoreet non curabitur gravida arcu ac tortor dignissim </p>
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
                                <th>Criador</th>
                                <td>Stan Lee</td>
                            </tr>
                            <tr>
                                <th>Primeira aparição</th>
                                <td>15/06/1999</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            <div className={styles.comics}>
                <h1 className={styles.borderComics}>Comics</h1>
            </div>
        </>
    )
}