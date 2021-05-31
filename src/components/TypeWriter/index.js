import{ useState, useEffect } from 'react'

//<sumary>
//    Crio uma função ao qual ele vai simular uma máquina de escrever. Ele recebe todos os caracteres recebido no meu welcomeComponents e exibi caractere por caractere para o usuário
//</sumary>

export default function TypeWrite(props){
    const[phrase, setPhrase] = useState('')

    useEffect(() => {
        let currentText = ''
        props.text.split('').forEach((char, index) => {
            setTimeout(() => {
                currentText = currentText.slice(0, -1)
                currentText += char
                if(props.text.length != index + 1){
                    currentText += "|"
                }
                setPhrase(currentText)
            }, 200 + (index * 100))
        });
    }, [])

    return(
        <>
            {phrase}
        </>
    )
}