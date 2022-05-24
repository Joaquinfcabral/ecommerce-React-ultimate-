import './NavBar.css'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <>
            <nav className='colorNav'>
                <div className="nav-wrapper">
                    <a href="#" className="margen brand-logo">Panda's</a>
                    <ul id="nav-mobile" className="centrado hide-on-med-and-down">
                        <li><a href="#">Sección 1</a></li>
                        <li><a href="#">Sección 2</a></li>
                        <li><a href="#">Sección 3</a></li>
                        <button className='botonCarrito'><CartWidget></CartWidget></button>
                        
                    </ul>
                </div>
                
            </nav>
        </>
    );
}




export default NavBar