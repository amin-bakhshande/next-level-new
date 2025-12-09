import React from "react";
import categoryImg from "../../../assets/000.jpg";
import Image from "next/image";

const Category = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-amber-400 mb-4">
        دسته بندی ها
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 mt-1 ">
        {cards.map((_, i) => (
          <div
            key={i}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500"
          >
            <Image
              src={categoryImg}
              priority
              alt="category"
              className="object-cover z-9 w-[300px] h-auto"
            />

            <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0  transition-colors duration-500 bg-orange-300/30 backdrop-blur-md" />

            <div className="absolute bottom-2 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-base font-semibold z-10">
              هتل آپارتمان
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
