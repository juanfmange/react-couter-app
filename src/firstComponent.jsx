const suma = () =>{
    const res = 5 + 10
    return res
}

const newMessage = {
    msg: 'Hola',
    title: 'diccionario'
}

export const FirstComponent = ( { title, subtitle } ) =>{

    return(
        <>
            <h1>{ title }</h1>
            {/* <h1> { JSON.stringify(newMessage) } </h1> */}
                <p>hola soy un numero {subtitle}</p>
        </>
    )
}