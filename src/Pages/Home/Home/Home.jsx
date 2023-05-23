import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenu from "../OurMenu/OurMenu";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OrderOnline></OrderOnline>
          <ChefService></ChefService>
          <OurMenu></OurMenu>
        </div>
    );
};

export default Home;