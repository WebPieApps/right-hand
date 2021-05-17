import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <header className="app-header">
            <div className="container">
                <div className="logo-section">
                    <div className="logo">
                        <span className="highlight-letter">R</span><span className="logo-letters">ight</span> 
                        <span className="highlight-letter">H</span><span className="logo-letters">and</span>
                    </div>
                </div>
                <nav className="main-navigation">
                <ul>
                    <li><NavLink to='/' exact  activeClassName="active">Home</NavLink></li>
                    {/* <li><NavLink to='/about' activeClassName="active">about</NavLink></li> */}
                    <li><NavLink to='/github' activeClassName="active">github</NavLink></li>
                    <li><NavLink to='/cdn' activeClassName="active">CDN Hub</NavLink></li>
                    <li><NavLink to='/random-user' activeClassName="active">Random Users</NavLink></li>
                    <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Header;