import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import ContactUs from "../ContactUs/ContactUs";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenuBanner from "../OurMenuBanner/OurMenuBanner";
import Popular from "../Popular/Popular";
import TestiMonials from "../TestiMonials/TestiMonials";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OrderOnline></OrderOnline>
          <ChefService></ChefService>
          <Popular></Popular>
          <ContactUs></ContactUs>
          <ChefRecommends></ChefRecommends>
          <OurMenuBanner></OurMenuBanner>
          <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;