import React from 'react';
import {Link} from 'gatsby';

const Header = () => {
    return (
        <header>
            <h1>Wen's Wecipes</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipe">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header