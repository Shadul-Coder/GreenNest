import { PiArrowsDownUpBold } from "react-icons/pi";
import CartBox from "../components/Cart/CartBox";
import { use, useEffect, useState } from "react";
import Success from "../assets/Success.png";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = use(AuthContext);
  const [cost, setCost] = useState(0);
  const [order, setOrder] = useState(true);
  const removeFromCart = (id) => {
    const newCart = cart.filter((plant) => plant.plantId !== id);
    setCart(newCart);
  };
  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      total += product.price * product.quantity;
    }
    setCost(total);
  }, [cart]);
  return (
    <div className="max-w-7xl w-[95%] mx-auto my-9 sm:my-13 lg:w-[97%] lg:mb-29">
      <div className="text-center space-y-3 mb-7 md:space-y-5 lg:mb-10">
        {cart.length === 0 ? (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Your <span className="text-green-600">Green</span> Cart
            </h1>
            <p className="sm:mx-auto sm:w-[70%] md:text-lg">
              Review your selected plants before checkout — let’s make your home
              greener, one plant at a time.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              You’ve selected your
              <br />
              favorite <span className="text-green-600">Green</span>!
            </h1>
            <p className="sm:mx-auto sm:w-[70%] md:text-lg">
              Make sure everything looks right before completing your order.
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col gap-3.5 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">Cart</h3>
          <h5 className="text-lg font-semibold sm:hidden">
            Total Cost : ${cost}
          </h5>
        </div>
        <div className="flex justify-end gap-3 sm:items-center">
          <h5 className="hidden sm:block sm:text-lg sm:font-semibold md:text-xl lg:text-2xl">
            Total Cost : ${cost}
          </h5>
          <button
            onClick={() => {
              const sortCart = [...cart];
              if (order) {
                sortCart.sort((x, y) => x.price - y.price);
              } else {
                sortCart.sort((x, y) => y.price - x.price);
              }
              setCart(sortCart);
              setOrder(!order);
            }}
            className="btn rounded-3xl text-green-600 bg-green-100 border border-green-600 sm:p-5 sm:text-lg lg:p-5.5"
          >
            <div className="flex items-center gap-1.5">
              Sort by Price{" "}
              <PiArrowsDownUpBold className="text-[17px] md:text-[20px]" />
            </div>
          </button>
          <button
            onClick={() => document.getElementById("purchase").showModal()}
            disabled={cost === 0 ? true : false}
            className="btn text-white bg-linear-to-r from-green-500 to-green-600 rounded-3xl bg-cover sm:p-5 sm:text-lg lg:p-5.5"
          >
            Purchase
          </button>
          <dialog id="purchase" className="modal">
            <div className="modal-box pt-10 rounded-4xl text-center space-y-3 sm:space-y-5">
              <img className="mx-auto" src={Success} alt="" />
              <h5 className="text-xl font-bold pb-3 border-b border-[#09080f1a] sm:pb-5 sm:text-2xl">
                Payment Successfully
              </h5>
              <p className="text-[#09080f99] sm:text-lg">
                Thanks for purchasing
              </p>
              <h5 className="text-[#09080f99] sm:text-lg">Total : ${cost}</h5>
              <form method="dialog">
                <button
                  onClick={() => {
                    setCart([]);
                    navigate("/");
                  }}
                  className="btn text-white bg-linear-to-r from-green-500 to-green-600 w-full font-semibold rounded-3xl py-5.5 sm:text-lg sm:py-6"
                >
                  Close
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-5 space-y-3 sm:mt-10 sm:space-y-5">
        {cart.length === 0 ? (
          <p className="my-25 text-center text-[#0b0b0bb3] sm:my-35 lg:mb-51">
            Your cart is empty
          </p>
        ) : (
          cart.map((plant) => (
            <CartBox
              key={plant.plantId}
              plant={plant}
              removeFromCart={removeFromCart}
            ></CartBox>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;