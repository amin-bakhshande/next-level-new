"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import shape from "../../assets/360a84742d7041320c25353e83c4a7ef.jpg";     
import shape1 from "../../assets/7f72fde428a6483eb29f17d9492612a5.jpg";     
import shape2 from "../../assets/000.jpg";

import Link from "next/link";

const listings = [
  {
    id: 1,
    title: "آپارتمان لوکس زعفرانیه",
    city: "تهران",
    image: shape,
    rooms: 2,
    bath: 1,
    parking: true,
    price: 3850000000,
    discount: 7.15,
  },
  {
    id: 2,
    title: "آپارتمان شیک نیاوران",
    city: "تهران",
    image: shape1,
    rooms: 3,
    bath: 2,
    parking: false,
    price: 2200000000,
    discount: 5,
  },
  {
    id: 3,
    title: "خانه ویلایی فردیس",
    city: "کرج",
    image: shape2,
    rooms: 4,
    bath: 2,
    parking: true,
    price: 1650000000,
    discount: 10,
  },
];

export default function MortgageAndRentPage() {
  const [search, setSearch] = useState("");

  const filteredListings = listings.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.city.toLowerCase().includes(query)
    );
  });

  return (
    <main className="mt-16 p-6  max-w-8xl mx-auto min-h-screen text-gray-900 dark:text-orange-100 bg-orange-50 dark:bg-gradient-to-br dark:from-[#1f1f1f] dark:via-[#232323] dark:to-[#1b1b1b] transition-all duration-500">
      {/* جستجو و فیلتر */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* جستجو */}
        <div className="flex items-center border border-orange-300 dark:border-orange-600 rounded-full px-4 py-1 bg-orange-100 dark:bg-white/5 backdrop-blur-md w-full md:w-1/3 shadow-sm transition">
          <input
            type="text"
            placeholder="جستجو کنید..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none px-2 py-1 text-sm w-full text-orange-800 dark:text-orange-100 placeholder:text-orange-400 dark:placeholder:text-orange-300"
          />
          <FiSearch className="text-orange-500" />
        </div>

        {/* فیلترها */}
        <div className="flex flex-wrap gap-2 justify-end">
          {[
            "همه",
            "محبوب‌ترین",
            "ارزان‌ترین ",
            "گران ترین ",
            "عکس دار",
            "پارکینگ دار",
            "حیاط دار",
          ].map((f, idx) => (
            <button
              key={idx}
              className="px-4 py-1 text-sm border border-orange-300 dark:border-orange-600 rounded-full bg-orange-100 dark:bg-white/5 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700 transition"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* کارت‌ها */}
      {filteredListings.length > 0 ? (
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className="relative group  bg-orange-50 dark:bg-white/5 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(255,165,0,0.25)] hover:border-orange-400 dark:hover:border-orange-500 backdrop-blur-sm"
            >
              <Image
                src={item.image}
                priority
                alt={item.title}
                className="object-cover w-full h-[200px] transition-all duration-300 hover:opacity-90"
              />
              <Link
                href={`/details/${item.id}`}
                className="absolute inset-0 flex items-center justify-center bg-orange-400/20 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
              >
                مشاهده جزئیات
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-orange-800 dark:text-orange-100">
                  {item.title}
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                  شهر: {item.city}
                </p>
                <div className="flex justify-between text-sm text-orange-700 dark:text-orange-300 mb-2">
                  <span>🛏 خواب: {item.rooms}</span>
                  <span>🛁 حمام: {item.bath}</span>
                  <span>{item.parking ? "پارکینگ دارد" : "بدون پارکینگ"}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-red-600 font-bold text-sm">
                    %{item.discount} تخفیف
                  </span>
                  <span className="font-semibold text-orange-800 dark:text-orange-100">
                    {item.price.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-orange-500 font-medium">
          هیچ ملکی با این مشخصات پیدا نشد!
        </p>
      )}
    </main>
  );
}
