import { Link } from 'react-router-dom'

function Header() { 
    return (
        <div className="Header">
            <h1>NC Snacks</h1>
            <nav>
                <Link to="/snacks" className='link'>Snackos </Link>
                <Link to="/" className='link'>Home</Link>
            </nav>
        </div>
    );
}

export default Header