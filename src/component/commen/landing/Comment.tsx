import React from "react";

const Comment = () => {
  const comments = [
    {
      name: "علیرضا محمدی",
      text: "ملک فوق‌العاده‌ای بود، همه امکانات کامل بود و برخورد صاحب‌خانه عالی بود.",
      date: "۱۴۰۳/۰۵/۱۰",
    },
    {
      name: "مریم کاظمی",
      text: "نسبت به قیمت، امکانات خوبی داشت. عکس‌ها با واقعیت مطابقت داشتن.",
      date: "۱۴۰۳/۰۴/۲۸",
    },
    {
      name: "حسین رضایی",
      text: "اقامت دل‌پذیری داشتم، پیشنهاد می‌کنم حتما امتحان کنید.",
      date: "۱۴۰۳/۰۳/۱۵",
    },
    {
      name: "حسین رضایی",
      text: "اقامت دل‌پذیری داشتم، پیشنهاد می‌کنم حتما امتحان کنید.",
      date: "۱۴۰۳/۰۳/۱۵",
    },
    {
      name: "حسین رضایی",
      text: "اقامت دل‌پذیری داشتم، پیشنهاد می‌کنم حتما امتحان کنید.",
      date: "۱۴۰۳/۰۳/۱۵",
    },
    {
      name: "حسین رضایی",
      text: "اقامت دل‌پذیری داشتم، پیشنهاد می‌کنم حتما امتحان کنید.",
      date: "۱۴۰۳/۰۳/۱۵",
    },
  ];
  return (
    <div>
      <section className="max-w-7xl  mx-auto px-4 py-12 mt-10 ">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          نظرات کاربران
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {comments.map((comment, idx) => (
            <div
              key={idx}
              className="h-48  bg-orange-300/10 hover:bg-orange-300/25   dark:bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition duration-300 hover:shadow-lg cursor-pointer scale-3d hover:scale-110"
            >
              <div className="flex justify-between items-center mb-2 text-2xl">
                <span className="font-semibold text-orange-500 mt-2">
                  {comment.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {comment.date}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Comment;
