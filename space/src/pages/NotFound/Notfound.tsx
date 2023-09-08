import { Link } from "react-router-dom";
import { Home } from "../Home/Home";

export const NotFound = () => {
    return (
        <>
        <h2>404</h2>
        Go to <Link to='/'>Home</Link>
        </>
        
    )
}