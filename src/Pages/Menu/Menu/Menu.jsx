import Cover from '../Shared/Cover/Cover';
import image1 from '../../../assets/menu/banner3.jpg'
import image2 from '../../../assets/menu/dessert-bg.jpeg'
import useMenuData from '../../../Hooks/useMenuData/useMenuData';
import OrderFood from '../Shared/OrderFood.jsx/OrderFood';

const Menu = () => {

    const [allMenu] = useMenuData()

    const offered = allMenu?.filter(popular => popular.category === 'offered')
    const dessert = allMenu?.filter(popular => popular.category === 'dessert')

    return (
        <div>
            <Cover image={image1} title='OUR MENU' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>
            <OrderFood title={"TODAY'S OFFER"} items={offered} subTitle={"--- Don't miss ---"}></OrderFood>

            <Cover image={image2} title='dessert' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <OrderFood items={dessert}></OrderFood>
        </div>
    );
};

export default Menu;