import ItemCount from '../components/ItemCount'


const ItemListContainer = () => {

    useEffect(() => {
        cartJuegos(2000, catalogoJuegos(juegos))
            .then(juegos => { console.log(juegos) })
            .catch(error => crossOriginIsolated.log(error))
    }, []);

    return (
        <>
            <h2> Tu tienda digital preferida</h2>
            <ItemCount stock={5} initial={1} onAdd={1} />
        </>
    )
}
export default ItemListContainer