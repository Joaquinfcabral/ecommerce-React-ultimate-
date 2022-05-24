import { useState } from 'react';
const ItemCount = () =>{
    const [aumentarStock, setAumentarStock] = useState(0);

    const [reducirStock, setReducirStock] = useState(0);

    const incrementar = () =>{
        if(aumentarStock < 5) setAumentarStock(aumentarStock+1);
        
    }

    const decrementar = () =>{
        if (reducirStock < 1)setReducirStock(reducirStock-1);
    }


    return(
        <>
        <p>{aumentarStock + reducirStock}Carrito</p>
        <button onClick={incrementar}> Agregar al carrito </button>
        <button onClick={decrementar}> Eliminar del carrito </button>
        </>
    )
}


export default ItemCount