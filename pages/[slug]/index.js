import data from "../../components/data/catalog";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Minus } from "../../components/UI/Minus";
import { Plus } from "../../components/UI/Plus";

function getShoes(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Order() {
  const router = useRouter();
  const { slug } = router.query;

  const shoes = getShoes(slug);

  if (Object.keys(shoes).length === 1) {
    return <div>Item not found</div>;
  }

  const [qty, setQty] = useState(1);    
  const total = qty * shoes.price
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative">
            <img
              src={shoes.img}
              alt={shoes.title}
              className="w-96 rounded-md"
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80 bg ">
            <h2 className="text-3x2 font-semibold">{shoes.title}</h2>
            <p>
              <span className="text-white-500">Stok:</span>{" "}
              <span className="font-semibold text-orange-500">{shoes.stok}</span>
            </p>

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-white-500">Harga:</p>
                <h3 className="text-2x1 font-semibold">{shoes.price}</h3>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-white-500">Jumlah:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl text-orange-500">{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  disabled={qty >= (shoes.stok)}
                  className="text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <button
                type="button"
                disabled
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex felx-row"
              >
                Masukkan keranjang (IDR {total})
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;