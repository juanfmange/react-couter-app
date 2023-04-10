const suma = () =>{
    const res = 5 + 10
    return res
}

const newMessage = {
    msg: 'Hola',
    title: 'diccionario'
}

export const FirstComponent = () =>{
    
    return(
        <>
            <h1>{suma()}</h1>
            {/* <h1> { JSON.stringify(newMessage) } </h1> */}
                <p>hola</p>
        </>
    )
}