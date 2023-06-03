import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import './CardMinimal.css'


const CardMinimal = () => {


    const stripe = useStripe();
    const elements = useElements();
    const [getError , setError] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
           setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-xl mt-3 text-red-600">{getError}</p>
        </form>
    );
};

export default CardMinimal;