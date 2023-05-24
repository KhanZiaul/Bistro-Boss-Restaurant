import { Helmet } from 'react-helmet-async';
import image1 from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuData from '../../../Hooks/useMenuData/useMenuData';
import { useState } from 'react';
import TabCard from '../TabCard/TabCard';

const Order = () => {

    // const [initialIndex,setIndex] = useState(0)

    const [allMenu] = useMenuData()
    const drinks = allMenu?.filter(popular => popular.category === 'drinks')
    const dessert = allMenu?.filter(popular => popular.category === 'dessert')
    const pizza = allMenu?.filter(popular => popular.category === 'pizza')
    const salad = allMenu?.filter(popular => popular.category === 'salad')
    const soup = allMenu?.filter(popular => popular.category === 'soup')


    return (
        <div className='my-12'>
            <Helmet>
                <title>ORDER | Bistro Boss Restaurant</title>
            </Helmet>

            <Cover image={image1} title='OUR SHOP' subTitle='WOULD YOU LIKE TO TRY A DISH ?'></Cover>

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            salad?.map(singleItem => <TabCard key={singleItem._id} item={singleItem}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            pizza?.map(singleItem => <TabCard key={singleItem._id} item={singleItem}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            soup?.map(singleItem => <TabCard key={singleItem._id} item={singleItem}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            dessert?.map(singleItem => <TabCard key={singleItem._id} item={singleItem}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                  
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;