import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {

    const location = useLocation()
    console.log(location)
    // const ignorePage = location.pathname === 'login'
    return (
        <div>
            {!location.pathname === 'login' || !location.pathname === 'register'  && <Nav></Nav>}
            <Outlet></Outlet>
            {!location.pathname === 'login' || !location.pathname === 'register'  && <Footer></Footer>}
        </div>
    );
};

export default MainLayout;