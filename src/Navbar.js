// const Navbar = () => {
//     return (  
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create" style={{
//                     color:"white",// always a string value
//                     backgroundColor: '#f1356d',
//                     borderRadius:'8px'
//                 }} >New Blog</a>
//             </div>
//         </nav>
//     );
// }
 
// export default Navbar;



// const Navbar = () => {
//     return (  
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create">New Blog</a>
//             </div>
//         </nav>
//     );
// }
 
// export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/cards">Cards</Link>
            </div>
        </nav>
    );
}

export default Navbar;