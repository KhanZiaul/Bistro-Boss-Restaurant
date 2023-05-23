import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import ContactUs from "../ContactUs/ContactUs";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenu from "../OurMenu/OurMenu";
import OurMenuBanner from "../OurMenuBanner/OurMenuBanner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OrderOnline></OrderOnline>
          <ChefService></ChefService>
          <OurMenu></OurMenu>
          <ContactUs></ContactUs>
          <ChefRecommends></ChefRecommends>
          <OurMenuBanner></OurMenuBanner>
        </div>
    );
};

export default Home;