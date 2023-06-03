import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardMinimal from "./CardMinimal";
import Title from "../../../Components/Title/Title";
import useCart from "../../../Hooks/useCart/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_CARD_PK);

const PayemtHistory = () => {
    const [cart] = useCart()
    const total = cart.reduce((initial , final) => initial+parseFloat(final.price) ,0)
    const amount = parseFloat(total).toFixed(2)
    return (
        <>
            <div className="my-12">
                <Title
                    subTitle={"--- Hurry Up !! ---"}
                    Title={"PAYMENT"}>
                </Title>
            </div>

            <div className="w-[80%] mt-20 mx-auto">
                <Elements stripe={stripePromise}>
                    <CardMinimal cart={cart} amount={amount}></CardMinimal>
                </Elements>
            </div>
        </>


    );
};

export default PayemtHistory;