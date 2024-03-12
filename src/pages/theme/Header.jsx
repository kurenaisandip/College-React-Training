import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
         <nav className="navbar">
         <ul className="menu">
             <li><Link to="/home">Home</Link></li>
             <li><Link to="/post">post</Link></li>
             <li><Link to="/contact">Contact</Link></li>
            
             <li><Link to="/login">Login</Link></li>
         </ul>
     </nav>
        </>
    );
}

export default Header;
