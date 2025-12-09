"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import section from "../../../assets/download (4).png";

const Herosection = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-white dark:from-[#1f1f1f] dark:via-[#232323] dark:to-[#1b1b1b] py-20 px-6 md:px-32 transition-all duration-500">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* متن‌ها */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-right md:w-1/2"
        >
          <h1 className="text-5xl md:text-5xl font-extrabold mb-6 text-gray-800 dark:text-orange-100 leading-tight">
            راحت‌ترین راه برای پیدا کردن خونه‌ی مورد علاقت!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-xl leading-relaxed">
            رزرو، رهن، اجاره و خرید فروش ملک مورد نظرتون
            <br />
            مثل آب خوردن با بایورنت.
          </p>
          <button className="bg-orange-500/80 text-black dark:text-orange-50 px-10 py-4 text-lg rounded-full hover:bg-orange-400/60 transition duration-300 shadow-md dark:shadow-orange-800/30">
            رهن و اجاره ملک
          </button>
        </motion.div>

        {/* تصویر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-100 to-transparent dark:from-yellow-600 dark:via-yellow-400 dark:to-transparent opacity-70 -z-10 blur-3xl"></div>

          <div className="relative w-[660px] h-[460px] shadow-[0_10px_40px_rgba(243,156,18,0.6)] dark:shadow-[0_10px_40px_rgba(255,204,0,0.3)] rounded-full">
            <Image
              src={section}
              alt="خانه"
              fill
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full p-6"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
