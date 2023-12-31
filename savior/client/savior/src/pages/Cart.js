import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.savior.productData);
  const userInfo = useSelector((state) => state.savior.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);
  console.log(productData);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                R {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                veritatis.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">R {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-cyan-400 w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NmcBNLgL8YrZlqSs0FCBLdq5H7wNwAOfOfhUmxZO1FKqHwKgyqO3aJWe4b1Uo4R7lojJPn31s1iOf3TrBuZPdv500LCQPcttv"
                name="Savior Online Shopping"
                amount={totalAmt * 100}
                label="Pay to savior"
                description={`Your Payment amount is R${totalAmt}`}
                //token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
        <p className="text-xl text-orange-600 font-titleFont font-semibold">
          Your Cart is Empty. Please go back to Shopping and add products to
          Cart.
        </p>
        <Link to="/">
          <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
              <HiOutlineArrowLeft />
            </span>
            go shopping
          </button>
        </Link>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
