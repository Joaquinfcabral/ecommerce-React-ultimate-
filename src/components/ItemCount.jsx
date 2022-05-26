import { useState } from 'react';

const ItemCount = ({stock}) =>{

    const [numero, setNumero] = useState(0);

    const incrementar = () =>{
        if(numero === {stock}) setNumero(numero+1);
        
    }

    const decrementar = () =>{
        if (numero === 0) setNumero(numero-1);
    }


    return(
        <>
        <p>{numero}En Carrito</p>
        <button onClick={incrementar}> Agregar al carrito </button>
        <button onClick={decrementar}> Eliminar del carrito </button>
        </>
    )
}


export default ItemCount


