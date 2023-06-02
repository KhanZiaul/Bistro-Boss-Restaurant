import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardMinimal from "./CardMinimal";

const stripePromise = loadStripe(import.meta.env.VITE_CARD_PK);

const PayemtHistory = () => {
    return (
        <div className="w-[80%] mt-7 mx-auto">
            <h2>Payment Page</h2>
            <Elements stripe={stripePromise}>
                <CardMinimal></CardMinimal>
            </Elements>
        </div>
    );
};

export default PayemtHistory;