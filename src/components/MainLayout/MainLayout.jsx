import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function MainLayout() {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;
