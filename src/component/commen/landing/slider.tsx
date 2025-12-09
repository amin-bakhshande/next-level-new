import React from "react";
import { FaBed, FaUserFriends, FaBath } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../../../assets/7f72fde428a6483eb29f17d9492612a5.jpg";
import Image from "next/image";

const Slider = () => {
  const hotelData = [
    {
      id: 1,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 10000,
      discountPrice: 90000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 2,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 120000,
      discountPrice: 1100000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 3,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 90000,
      discountPrice: 80000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 4,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 90000,
      discountPrice: 80000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 5,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 120000,
      discountPrice: 1100000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 6,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 160000,
      discountPrice: 1500000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 7,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 10000,
      discountPrice: 90000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 8,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 120000,
      discountPrice: 1100000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 9,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 90000,
      discountPrice: 80000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 10,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 90000,
      discountPrice: 80000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 11,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 120000,
      discountPrice: 1100000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    {
      id: 12,
      title: "هتل اوکیشن بابل",
      sleeps: 6,
      guests: 12,
      baths: 2,
      price: 160000,
      discountPrice: 1500000,
      image:
        "https://i.pinimg.com/736x/02/fa/76/02fa766e49c592287d76fcf86cb131ad.jpg",
    },
    // می‌تونی آیتم‌های بیشتر هم اضافه کنی
  ];
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-amber-400 mt-32">
        جشنواره تخفیف بهاره
      </h2>

      <section className="px-4 sm:px-6 py-10 bg-amber-50 dark:bg-[#0e1525] mt-2  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{
            el: ".customer-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          dir="rtl"
        >
          {hotelData.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <div className="group relative bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
                {/* لایه overlay صورتی هنگام هاور */}
                <div className="absolute inset-0 bg-orange-400/40 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10" />

                <div className="relative z-20 overflow-hidden">
                  <Image
                    src={img}
                    priority
                    alt="hotel image"
                    className="object-cover w-full h-52 sm:h-56 lg:h-60 transform transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* افکت گرادینت تاریک روی تصویر */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-4 space-y-3 relative z-20">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-amber-300 truncate">
                    {hotel.title}
                  </h3>

                  <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-sm flex-wrap">
                    <div className="flex items-center gap-1">
                      <FaBed className="text-orange-500" /> {hotel.sleeps} خواب
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUserFriends className="text-blue-500" /> {hotel.guests}{" "}
                      نفر
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath className="text-purple-500" /> {hotel.baths} حمام
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="line-through text-sm text-gray-400 dark:text-gray-500">
                      {hotel.price.toLocaleString()} تومان
                    </span>
                    <span className="text-orange-600 dark:text-lime-400 font-bold text-lg">
                      {hotel.discountPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="customer-pagination flex justify-center mt-6 gap-2" />
      </section>
    </div>
  );
};

export default Slider;
