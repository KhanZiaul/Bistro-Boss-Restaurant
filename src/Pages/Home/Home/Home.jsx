import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OrderOnline></OrderOnline>
          <ChefService></ChefService>
        </div>
    );
};

export default Home;