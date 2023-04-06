import { NavLink, Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="header__logo"><i class="fa-brands fa-github"></i> Dash-Board</a>
                <nav>
                    <Link to='/' className="header__link">About</Link>
                    <Link to='/Content' className="header__link">Get-User-Repository</Link>
                </nav>
            </header>
        </>
    )
}
export default Header