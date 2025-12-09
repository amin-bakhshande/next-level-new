import React from "react";
import Image from "next/image";
import aboutImg from "../../../assets/360a84742d7041320c25353e83c4a7ef.jpg";

const About = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-amber-50 dark:bg-gray-900 rounded-xl shadow-md mt-32">
        <div className="w-full lg:w-1/2 text-right">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-amber-400 mb-4">
            درباره ملک
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-loose text-justify text-lg">
            این ملک واقع در منطقه‌ای آرام و سرسبز با دسترسی عالی به امکانات شهری
            است. شامل ۶ خواب، ۲ حمام مجزا و طراحی داخلی مدرن می‌باشد. نمای
            ساختمان تلفیقی از سبک کلاسیک و مینیمال بوده و فضای سبز اختصاصی دارد.
            گزینه‌ای عالی برای خانواده‌های پرجمعیت یا سرمایه‌گذاری ملکی مطمئن در
            شمال کشور.
          </p>
        </div>
        <div className="w-full lg:w-fit p-4 perspective">
          <div className="w-full lg:w-fit p-4 perspective">
            <div className="transform-style-3d rotate-y-6">
              <Image
                src={aboutImg}
                priority
                alt="category"
                className="rounded-xl object-cover w-[550px] h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
