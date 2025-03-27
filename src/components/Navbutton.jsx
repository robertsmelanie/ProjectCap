import { Link } from 'react-router-dom';

function NavigationButtons() {
    return (
        <div className="navigation-buttons">
            <Link to="/health" className="custom-button">Health</Link>
            <Link to="/supplies" className="custom-button">Supplies</Link>
            <Link to="/history" className="custom-button">History</Link>
        </div>
    );
}
