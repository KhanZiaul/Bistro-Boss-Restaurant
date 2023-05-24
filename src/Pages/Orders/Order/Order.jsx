import { Helmet } from 'react-helmet-async';
import image1 from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>ORDER | Bistro Boss Restaurant</title>
            </Helmet>

            <Cover image={image1} title='OUR SHOP' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>
            
        </div>
    );
};

export default Order;