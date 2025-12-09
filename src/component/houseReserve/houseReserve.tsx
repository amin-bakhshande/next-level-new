"use client";

import { useState } from "react";
import Image from "next/image";
import shape from "../../assets/e0e230bcc099f5e6e318b78535be6da3.jpg";
import MapComponent from "./map";
import { Dialog } from "@headlessui/react";
import { FiSearch, FiFilter } from "react-icons/fi";
import PriceRange from "./PriceRange";

const listings = [
  {
    id: 1,
    title: "آپارتمان زعفرانیه",
    city: "تهران",
    lat: 35.8073,
    lng: 51.414,
    image: shape,
    rooms: 2,
    bath: 1,
    parking: true,
    price: 1850000000,
    discount: 7.15,
  },
  {
    id: 2,
    title: "آپارتمان نیاوران",
    city: "تهران",
    lat: 35.8253,
    lng: 51.4687,
    image: shape,
    rooms: 3,
    bath: 2,
    parking: false,
    price: 4200000000,
    discount: 5,
  },
  {
    id: 3,
    title: "خانه ویلایی فردیس",
    city: "کرج",
    lat: 35.7168,
    lng: 50.9396,
    image: shape,
    rooms: 4,
    bath: 2,
    parking: true,
    price: 2650000000,
    discount: 10,
  },
  {
    id: 4,
    title: "خانه ویلایی تجریش",
    city: "تهران",
    lat: 35.7168,
    lng: 50.9396,
    image: shape,
    rooms: 3,
    bath: 1,
    parking: true,
    price: 3650000000,
    discount: 10,
  },
];

export default function HouseReserve() {
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<
    [number, number] | null
  >(null);

  const [priceRange, setPriceRange] = useState<[number, number]>([
    100000000, 5000000000,
  ]);

  const filteredListings = listings.filter((item) => {
    const query = search.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(query) ||
      item.city.toLowerCase().includes(query);

    const matchPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];

    return matchSearch && matchPrice;
  });

  return (
    <main className="mt-16 p-6 max-w-8xl mx-auto text-gray-800 dark:text-orange-50">
      {/* جستجو */}
      <div className="flex flex-col md:flex-row  items-center mb-6 gap-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-white/5 backdrop-blur-md text-orange-800 dark:text-orange-100 rounded-full border border-orange-300 dark:border-orange-600 hover:bg-orange-200 dark:hover:bg-orange-700 transition"
        >
          <FiFilter />
          فیلترها
        </button>
        <div className="flex items-center border border-orange-300 dark:border-orange-600 rounded-full px-4 py-1 bg-orange-50 dark:bg-white/5 w-full md:w-1/3">
          <input
            type="text"
            placeholder="جستجو کنید..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none px-2 py-1 text-sm w-full text-orange-800 dark:text-orange-100"
          />
          <FiSearch className="text-orange-500" />
        </div>
      </div>
      {/* شبکه */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* لیست ملک‌ها */}
        <div className=" grid grid-cols-2 gap-4">
          {filteredListings.map((item) => (
            <div
              key={item.id}
              className=" bg-orange-100 dark:bg-white/5 backdrop-blur-md  rounded-xl shadow-sm overflow-hidden border border-orange-200 dark:border-orange-700 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedDestination([item.lat, item.lng])}
            >
              <Image
                src={item.image}
                priority
                alt={item.title}
                className="object-cover w-full h-[200px] rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-1">
                  شهر: {item.city}
                </p>
                <div className="flex justify-between text-sm text-orange-700 dark:text-orange-300 mb-2">
                  <span>🛏 خواب: {item.rooms}</span>
                  <span>🛁 حمام: {item.bath}</span>
                  <span>{item.parking ? "پارکینگ دارد" : "بدون پارکینگ"}</span>
                </div>
                <div className="flex justify-between items-center">
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
        <Dialog
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-[#2b2b2b] p-6 shadow-xl">
              <Dialog.Title className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
                فیلتر نتایج
              </Dialog.Title>

              {/* فیلتر مقصد */}
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
                  انتخاب شهر
                </label>
                <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">
                  <option>تهران</option>
                  <option>کرج</option>
                  <option>اصفهان</option>
                </select>
              </div>

              {/* مرتب سازی */}
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
                  مرتب‌سازی
                </label>
                <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">
                  <option>جدیدترین</option>
                  <option>ارزان‌ترین</option>
                  <option>گران‌ترین</option>
                </select>
              </div>

              <PriceRange onChange={setPriceRange} />
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
                  امکانات هتل
                </label>
                <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">
                  <option>اتاق</option>
                  <option>استخر</option>
                  <option>حموم</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
                  امتیازات هتل
                </label>
                <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100">
                  <option>جدیدترین</option>
                  <option>ارزان‌ترین</option>
                  <option>گران‌ترین</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-4 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                >
                  بستن
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-4 py-2 text-sm rounded bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  اعمال فیلتر
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
        {/* نقشه */}
        <div className="h-[690px]">
          <MapComponent
            listings={filteredListings}
            selectedDestination={selectedDestination}
          />
        </div>
      </div>
    </main>
  );
}
