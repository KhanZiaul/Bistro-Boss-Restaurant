import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {

    const location = useLocation()
    const ignorePage = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            { ignorePage || <Nav></Nav>}
            <Outlet></Outlet>
            { ignorePage || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;