import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <ul className='header-list'>
                    <li className='header-list__item'><Link to='/' className='header-list__link'>Главная</Link></li>
                    <li className='header-list__item'><Link to='/employees' className='header-list__link'>Сотрудники</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
