import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardMinimal from "./CardMinimal";
import Title from "../../../Components/Title/Title";

const stripePromise = loadStripe(import.meta.env.VITE_CARD_PK);

const PayemtHistory = () => {
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
                    <CardMinimal></CardMinimal>
                </Elements>
            </div>
        </>


    );
};

export default PayemtHistory;