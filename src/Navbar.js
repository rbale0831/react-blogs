import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1><Link to="/">Rohit Blog</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <Link to="/cards">Cards</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;