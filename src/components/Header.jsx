import { Link } from 'react-router-dom'

function Header() { 
    return (
        <>
            <h1>NC Snacks</h1>
            <nav>
                <Link to="/snacks">Snacks </Link>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Header