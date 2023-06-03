import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import './CardMinimal.css'
import { useEffect } from "react";
import useAxiosSrcure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const CardMinimal = ({ cart, refetch , amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [getError, setError] = useState('')
    const [axiosSecure] = useAxiosSrcure()
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { user } = useContext(AuthContext)

    const price = parseFloat(amount)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {

            setError('')
        }

        const { paymentIntent, conFirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user ? user.displayName : 'anomyous',
                        email: user ? user.email : 'unknown'
                    },
                },
            },
        );

        if (conFirmError) {
            console.log(conFirmError)

        }

        if (paymentIntent.status == 'succeeded') {

            console.log(paymentIntent)

            setTransactionId(paymentIntent.id)
            const payment = {
                name: user.displayName,
                email: user.email,
                date: new Date(),
                transactionId,
                totalProducts: cart?.length,
                cartId: cart.map(cId => cId._id),
                productsId: cart.map(cId => cId.cartID),
                productsName: cart.map(cn => cn.name)
            }

            axiosSecure.post('/payment', payment)
                .then(res => {
                    refetch()
                    console.log(res.data)
                })
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
            <p className="text-xl mt-3 text-green-600">  {transactionId ? `Payment successfully done , transaction id - ${transactionId}` : ' '}</p>
        </form>
    );
};

export default CardMinimal;