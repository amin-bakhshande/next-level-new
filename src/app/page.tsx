'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-[#0d1321] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0e1525] text-white rounded-[2rem] shadow-2xl border border-orange-500 p-8 relative rtl space-y-6">
        
        {/* سربرگ فرم */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            <button className="bg-orange-500 px-6 py-2 rounded-t-xl text-white font-bold cursor-pointer">ورود</button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-tr-xl opacity-50 cursor-not-allowed cursor-pointer">ثبت نام</button>
          </div>
        </div>

        <h2 className="text-xl text-center font-bold">ورود به حساب کاربری</h2>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
            password: Yup.string().min(6, 'حداقل ۶ کاراکتر').required('رمز عبور الزامی است'),
          })}
           onSubmit={async (values, { setSubmitting, setErrors }) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      // اگه لاگین شکست خورد، پیام خطا بده (میتونی بهترش هم بکنی)
      setErrors({ email: 'نام کاربری یا رمز عبور اشتباه است' });
    } else {
      // موفقیت‌آمیز: انتقال به داشبورد یا صفحه موردنظر
      // window.location.href = "/dashboard";
      console.log("booooos");
      
    }

    setSubmitting(false);
  }}
        >
          <Form className="space-y-4">
            {/* فیلد ایمیل */}
            <div>
              <label className="block mb-1 text-sm">ایمیل</label>
              <div className="relative">
                <Field
                  name="email"
                  type="email"
                  className="w-full py-2 pr-4 pl-10 rounded-lg bg-[#1f2937] border border-gray-500 focus:ring-2 focus:ring-orange-400"
                />
                <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* فیلد رمز عبور */}
            <div>
              <label className="block mb-1 text-sm">رمز عبور</label>
              <div className="relative">
                <Field
                  name="password"
                  type="password"
                  className="w-full py-2 pr-4 pl-10 rounded-lg bg-[#1f2937] border border-gray-500 focus:ring-2 focus:ring-orange-400"
                />
                <HiLockClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* دکمه ورود */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
            >
              ورود
            </button>
          </Form>
        </Formik>

        {/* دکمه‌های ورود با گوگل و گیت‌هاب */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4">
        <button 
          onClick={() => signIn("google")}
        className="flex items-center justify-center gap-2 bg-white text-black w-full py-2 px-4 rounded-lg hover:bg-gray-200 transition">
  <FcGoogle size={20} />
  ورود با گوگل
</button>
          <button 
           onClick={() => signIn("github")}
          className="flex items-center justify-center gap-2 bg-black text-white w-full py-2 px-4 rounded-lg hover:bg-gray-800 transition">
    <FaGithub size={20} />
    ورود با گیت‌هاب
  </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
