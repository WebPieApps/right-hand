import { Link } from 'react-router-dom';
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
                    <li><Link to='/' className="active">Home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/github'>github</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Header;