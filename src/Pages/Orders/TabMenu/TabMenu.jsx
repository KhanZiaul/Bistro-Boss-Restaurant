import TabCard from "../TabCard/TabCard";


const TabMenu = ({item}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                item?.map(singleItem => <TabCard key={singleItem._id} item={singleItem}></TabCard>)
            }
        </div>
    );
};

export default TabMenu;