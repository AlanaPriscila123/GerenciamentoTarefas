import { Link } from "react-router-dom"
function Menu(){
    return (
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>

            </ul>
       
        </nav>
    )
}

export default Menu;