import Cover from '../Shared/Cover/Cover';
import image1 from '../../../assets/menu/banner3.jpg'
import useMenuData from '../../../Hooks/useMenuData/useMenuData';

const Menu = () => {

    const [allMenu] = useMenuData()
    const populars = allMenu?.filter(popular => popular.category === 'popular')
    
    return (
        <div>
            <Cover image={image1} title='OUR MENU' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>
        </div>
    );
};

export default Menu;