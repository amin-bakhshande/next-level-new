import Image from "next/image";
import { notFound } from "next/navigation";
import shape from "../../../assets/360a84742d7041320c25353e83c4a7ef.jpg";
import shape1 from "../../../assets/7f72fde428a6483eb29f17d9492612a5.jpg";
import shape2 from "../../../assets/000.jpg";
import HotelDetails from "@/component/mortgage-details/mortgage-details";

// دیتای تستی
const listings = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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

export default function MortgageDetails({
  params,
}: {
  params: { id: string };
}) {
  const listing = listings.find((item) => item.id === params.id);

  if (!listing) return notFound();

  return (
    <div className="mt-16 min-h-screen bg-white dark:bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-orange-50 dark:bg-white/5 border border-orange-200 dark:border-orange-600 rounded-xl shadow-md overflow-hidden p-6 space-y-6">
        {/* عکس ملک */}
        <div className="w-full flex justify-center">
          <Image
            src={listing.image}
            alt={listing.title}
            className="rounded-lg shadow object-cover max-w-full h-auto"
          />
        </div>

        {/* اطلاعات ملک */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            {listing.title}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            📍 شهر: {listing.city}
          </p>
        </div>

        {/* مشخصات */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800 dark:text-gray-300">
          <span>🛏 خواب: {listing.rooms}</span>
          <span>🛁 حمام: {listing.bath}</span>
          <span>{listing.parking ? "🚗 پارکینگ دارد" : "🚫 بدون پارکینگ"}</span>
          <span>💰 {listing.price.toLocaleString()} تومان</span>
          <span className="text-red-500 font-bold">
            %{listing.discount} تخفیف
          </span>
        </div>
      </div>
      <HotelDetails />
    </div>
  );
}
