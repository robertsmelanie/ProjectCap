import { Link } from 'react-router-dom';
import 'Navbar.css';

function FooterButtons() {
    return (
        <div className="footer-buttons">
            <Link to="/health" className="custom-footer-button">Health</Link>
            <Link to="/supplies" className="custom-footer-button">Supplies</Link>
            <Link to="/history" className="custom-footer-button">History</Link>
        </div>
    );
}

export default FooterButtons;
