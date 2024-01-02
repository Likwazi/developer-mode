import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/saviorSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = item.attributes.name;
  const changeIdToString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };

  const rootId = changeIdToString(id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  console.log(item);
  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          alt="itemImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4 bg-black">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-Pacifico text-cyan-400 text-base font-bold">
              {item?.attributes?.name.substring(0, 20)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-semibold text-white">
                R{item?.attributes?.price}
              </p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item?.id,
                    title: item?.attributes?.name,
                    image: item?.attributes?.image,
                    price: item?.attributes?.price,
                    quantity: 1,
                    description: item?.attributes?.description,
                  })
                ) & toast.success(`${item?.attributes?.name} is added`)
              }
              className="absolute z-20 w-[100px] text-gray-300 hover:text-gray-300 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{item?.attributes?.category}</p>
        </div>
        <div></div>
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

export default ProductsCard;
