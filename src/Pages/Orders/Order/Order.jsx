import { Helmet } from 'react-helmet-async';
import image1 from '../../../assets/shop/banner2.jpg'
import Cover from '../../Menu/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuData from '../../../Hooks/useMenuData/useMenuData';
import TabMenu from '../TabMenu/TabMenu';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useScroll from '../../../Hooks/useScroll/useScroll';

const Order = () => {

    const location = useLocation()
    useScroll(location)
 
    const items = ['salad' , 'pizza', 'soup' , 'dessert' , 'drinks']
    const {category} = useParams()
    const initialIndex = items.indexOf(category)
    const [indexNumber,setIndexNumber] = useState(initialIndex)

    const [allMenu] = useMenuData()
    const drinks = allMenu?.filter(popular => popular.category === 'drinks')
    const dessert = allMenu?.filter(popular => popular.category === 'dessert')
    const pizza = allMenu?.filter(popular => popular.category === 'pizza')
    const salad = allMenu?.filter(popular => popular.category === 'salad')
    const soup = allMenu?.filter(popular => popular.category === 'soup')


    return (
        <div className='mb-12'>
            <Helmet>
                <title>ORDER | Bistro Boss Restaurant</title>
            </Helmet>

            <Cover image={image1} title='OUR ORDER' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>

            <Tabs defaultIndex={indexNumber} onSelect={(index) => setIndexNumber(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <TabMenu item={salad}></TabMenu>
                </TabPanel>

                <TabPanel>
                    <TabMenu item={pizza}></TabMenu>
                </TabPanel>

                <TabPanel>
                    <TabMenu item={soup}></TabMenu>
                </TabPanel>

                <TabPanel>
                    <TabMenu item={dessert}></TabMenu>
                </TabPanel>

                <TabPanel>
                    <TabMenu item={drinks}></TabMenu>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;