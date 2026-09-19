import './Header.css';
import { Link } from 'react-router-dom';
export default function Header()
{
    return(
        <header>
            <h1>E_Commerce</h1>
            <nav>
                <ul>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to='/signin'>SignIn</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/dash">DashBoard</Link></li>
                    <li><Link to='/fav'>Favorites</Link></li>
                    <li><Link to='/out'>Log Out</Link></li>
                </ul>
            </nav>
        </header>
    )
}
