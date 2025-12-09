"use client";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-10 pb-6 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-500 dark:border-gray-700 pb-6 rounded-full">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3 mr-5">
            بایورنت
          </h2>
          <p className="text-sm leading-relaxed mr-5">
            پلتفرم هوشمند اجاره، رزرو و مشاهده‌ی اطلاعات جامع انواع املاک در
            سراسر ایران.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">لینک‌های مفید</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                رزرو سریع
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                مقالات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3"> نحوه ی رزرو اقامت</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                رزرو سریع
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                مقالات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                درباره ما
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-2xl text-orange-500">
            <a href="#" className="hover:text-orange-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-600 transition">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} بایورنت - تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
