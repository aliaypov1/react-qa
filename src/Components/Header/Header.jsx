import { NavLink, Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="header__logo"><i className="fa-brands fa-github"></i> Dash-Board</a>
                <nav>
                    <Link to='/' className="header__link">About</Link>
                    <Link to='/Content' className="header__link">Get-User-Repository</Link>
                </nav>
                <div className="burger">
                    <input type="checkbox" id="burger" hidden />
                    <label for="burger" className="burger__btn"> </label>
                    <nav className="burger__nav">
                        <Link to='/' className="burger__link">About</Link>
                        <Link to='/Content' className="burger__link">Get-User-Repository</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header