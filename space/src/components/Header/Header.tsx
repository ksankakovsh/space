import classes from "./Header.module.css";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <>
        <header className={classes.header}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 2">
                <circle id="Oval" cx="24" cy="24" r="24" fill="white"/>
                <path id="Path" fillRule="evenodd" clipRule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
                </g>
            </svg>
            <nav className={classes.nav}>
                <Link className={classes.nav_item} to="/"> <span>00</span> home</Link>
                <Link className={classes.nav_item} to="/destination"><span>01</span> destination</Link>
                <Link className={classes.nav_item} to="/crew"><span>02</span> crew</Link>
                <Link className={classes.nav_item} to="/technology"><span>03</span> technology</Link>
            </nav>
            
        </header>
        </>
    )
}