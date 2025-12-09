"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiFilter } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import shape from "@/assets/000.jpg";

const data = [...Array(4)].map((_, i) => ({
  id: i,
  title: "آپارتمان لوکس زعفرانیه",
  city: "تهران",
  rooms: 2,
  bath: 1,
  parking: true,
  price: 1500000000,
  discount: 7.15,
  image: shape,
}));

export default function HouseReserve() {
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* سمت چپ – کارت‌ها */}
      <div className="w-full md:w-1/2 p-4 overflow-auto bg-white dark:bg-[#1c1c1c] transition">
        {/* سرچ و فیلتر */}
        <div className="flex justify-between items-center mb-4 gap-3">
          <div className="flex items-center  bg-orange-100 dark:bg-white/5 backdrop-blur-md  border border-orange-300 dark:border-orange-600 rounded-full px-4 py-2 w-full">
            <input
              type="text"
              placeholder="جستجو کنید..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-orange-900 dark:text-orange-100"
            />
            <FiSearch className="text-orange-500" />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-white/5  text-orange-800 dark:text-orange-100 rounded-full border border-orange-300 dark:border-orange-600 hover:bg-orange-200 dark:hover:bg-orange-700 transition"
          >
            <FiFilter />
            فیلترها
          </button>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-orange-100 dark:bg-white/5  backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-orange-200 dark:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.015]"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[160px] object-cover"
              />
              <div className="p-3 text-orange-800 dark:text-orange-200">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm mb-2">شهر: {item.city}</p>
                <div className="flex justify-between text-sm">
                  <span>🛏 {item.rooms} خواب</span>
                  <span>🛁 {item.bath} حمام</span>
                  <span>{item.parking ? "پارکینگ دارد" : "بدون پارکینگ"}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-600 font-bold text-sm">
                    %{item.discount} تخفیف
                  </span>
                  <span className="font-bold text-sm">
                    {item.price.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* سمت راست – نقشه */}
      <div className="hidden md:block w-full md:w-1/2 bg-gray-100 dark:bg-[#111] relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl">
          نقشه در اینجا قرار می‌گیرد
        </div>
      </div>

      {/* مدال فیلتر */}
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
    </div>
  );
}
