import Cover from '../Shared/Cover/Cover';
import image1 from '../../../assets/menu/banner3.jpg'
import useMenuData from '../../../Hooks/useMenuData/useMenuData';
import OrderFood from '../Shared/OrderFood.jsx/OrderFood';

const Menu = () => {

    const [allMenu] = useMenuData()
    const offered = allMenu?.filter(popular => popular.category === 'offered')

    return (
        <div>
            <Cover image={image1} title='OUR MENU' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>
            <OrderFood title={"TODAY'S OFFER"} items={offered} subTitle={"--- Don't miss ---"}></OrderFood>
        </div>
    );
};

export default Menu;