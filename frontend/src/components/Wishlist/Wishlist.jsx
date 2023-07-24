import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description: "test",
      price: 999,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description: "test",
      price: 999,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description: "test",
      price: 999,
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          {/* <div className="w-full h-screen flex items-center justify-center"> */}
          <div>
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            {/* <h5>Cart Items is empty!</h5> */}
            {/* Item length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">
                {/* {cart && cart.length} items */} 3 items
              </h5>
            </div>

            {/* cart Single Items */}
            <br />
            <div className="w-full border-t">
              {cartData &&
                cartData.map((i, index) => (
                  <CartSingle
                    key={index}
                    data={i}
                    //   quantityChangeHandler={quantityChangeHandler}
                    //   removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//removeFromWishlistHandler,addToCartHandler

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1
          className="cursor-pointer 900px:mb-['unset'] 900px:ml-['unset'] mb-2 ml-2"
          //   onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          // src={`${data?.images[0]?.url}`}
          src="https://cdn.stocksnap.io/img-thumbs/960w/baby-clothes_Q2NLOOVQBU.jpg"
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            tile="Add to cart"
            //  onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
