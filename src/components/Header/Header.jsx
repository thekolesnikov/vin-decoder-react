import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <Link to="/">VIN Decoder</Link>
            </div>
            <div className={styles.header__links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/variables">Variables</NavLink>
            </div>
        </header>
    );
}

export default Header;
