import PropTypes from 'prop-types'

const suma = () =>{
    const res = 5 + 10
    return res
}

const newMessage = {
    msg: 'Hola',
    title: 'diccionario'
}

export const FirstComponent = ( { title, subtitle } ) =>{
    if (!title) {
        throw new Error('el titulo no existe');
    }
    return(
        <>
            <h1>{ title }</h1>
            {/* <h1> { JSON.stringify(newMessage) } </h1> */}
                <p>hola soy un numero {subtitle}</p>
        </>
    )
}

FirstComponent.PropTypes = {
    title: PropTypes.string.isRequired
}