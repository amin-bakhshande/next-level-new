"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function HotelDetails() {
  const [comments, setComments] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      checkIn: "",
      checkOut: "",
      guests: "",
      discountCode: "",
      comment: "",
    },
    validationSchema: Yup.object({
      checkIn: Yup.string().required("تاریخ ورود الزامی است"),
      checkOut: Yup.string().required("تاریخ خروج الزامی است"),
      guests: Yup.number()
        .required("تعداد نفرات الزامی است")
        .min(1, "حداقل یک نفر باید وارد شود"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (values.comment) {
        setComments([...comments, values.comment]);
      } else {
        alert("رزرو با موفقیت انجام شد 🎉");
      }
      resetForm();
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 mt-8 rounded-xl shadow">
      {/* امکانات هتل */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          امکانات هتل
        </h2>
        <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300">
          <span>🛏 ۴ خواب</span>
          <span>🚿 حمام خصوصی</span>
          <span>📶 وای‌فای رایگان</span>
          <span>🅿️ پارکینگ</span>
          <span>🍽 صبحانه رایگان</span>
        </div>
      </section>

      {/* فرم رزرو */}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              تاریخ ورود
            </label>
            <input
              type="date"
              name="checkIn"
              onChange={formik.handleChange}
              value={formik.values.checkIn}
              className="input"
            />
            {formik.errors.checkIn && formik.touched.checkIn && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.checkIn}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              تاریخ خروج
            </label>
            <input
              type="date"
              name="checkOut"
              onChange={formik.handleChange}
              value={formik.values.checkOut}
              className="input"
            />
            {formik.errors.checkOut && formik.touched.checkOut && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.checkOut}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">
            تعداد نفرات
          </label>
          <input
            type="number"
            name="guests"
            onChange={formik.handleChange}
            value={formik.values.guests}
            className="input"
            placeholder="مثلاً ۲"
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.guests}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">
            کد تخفیف (اختیاری)
          </label>
          <input
            type="text"
            name="discountCode"
            onChange={formik.handleChange}
            value={formik.values.discountCode}
            className="input"
            placeholder="مثلاً OFF10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          رزرو کن
        </button>
      </form>

      {/* فرم ارسال نظر */}
      <form onSubmit={formik.handleSubmit} className="mt-10 space-y-3">
        <label className="text-sm text-gray-700 dark:text-gray-300">
          نظر خود را درباره‌ی این هتل بنویسید:
        </label>
        <textarea
          name="comment"
          rows={3}
          onChange={formik.handleChange}
          value={formik.values.comment}
          className="input"
          placeholder="نظر شما..."
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
        >
          ارسال نظر
        </button>
      </form>

      {/* لیست نظرات */}
      {comments.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            نظرات کاربران:
          </h4>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300 text-sm">
            {comments.map((cmt, i) => (
              <li
                key={i}
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md"
              >
                {cmt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
