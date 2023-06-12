import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useNavigate, useParams } from "react-router-dom";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const id = useParams();
  const [selectedClasses] = useSelectedClasses();
  const selectedClass = selectedClasses.find((cls) => cls._id === id.id);
  console.log(selectedClass);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if (selectedClass?.price) {
      axiosSecure
        .post("/create-payment-intent", { price: selectedClass?.price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [selectedClass, axiosSecure]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          ...selectedClass,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axiosSecure
          .delete(`/selectedclass/${selectedClass._id}`)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        axiosSecure
          .post("/enrolledclasses", paymentInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire(
                `Transaction id:${paymentIntent.id}`,
                `${selectedClass.class_name} enrolled successfully!!.`,
                "success"
              );
              navigate("/dashboard/payhistory");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-600 ml-6">{cardError}</p>}
        <div className="flex  justify-center">
          <button className="btn" type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
