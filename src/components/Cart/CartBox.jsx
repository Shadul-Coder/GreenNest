import { RiCloseCircleLine } from "react-icons/ri";
import toast from "react-hot-toast";

const CartBox = ({ plant, removeFromCart }) => {
  const { plantId, plantName, price, quantity, description, image } = plant;
  return (
    <div className="bg-green-100 p-3 rounded-3xl flex justify-between items-center gap-3 sm:gap-5 sm:p-5">
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          className="h-[105px] w-[105px] rounded-2xl sm:h-[200px] sm:w-[200px]"
          src={image}
          alt=""
        />
        <div className="sm:space-y-3">
          <h2 className="text-lg text-green-600 font-semibold sm:text-2xl">
            {plantName}
          </h2>
          <p className="hidden sm:block">{description.slice(0, 90)}...</p>
          <div className="sm:space-y-1">
            <h3 className="font-semibold text-[#09080fcc] text-sm sm:text-lg">
              Price: ${price}
            </h3>
            <h5 className="font-semibold text-[#09080fcc] text-sm sm:text-lg">
              Quantity : {quantity}
            </h5>
          </div>
        </div>
      </div>
      <div className="mr-3 sm:mr-7">
        <RiCloseCircleLine
          onClick={() => {
            removeFromCart(plantId);
            toast.success("Product removed from cart");
          }}
          className="text-[30px] text-red-500 cursor-pointer md:text-[33px] lg:text-[35px]"
        />
      </div>
    </div>
  );
};

export default CartBox;