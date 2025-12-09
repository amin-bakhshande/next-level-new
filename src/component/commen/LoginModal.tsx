"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { HiLockClosed, HiOutlineMail, HiX } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        static
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-20 pointer-events-none" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="pointer-events-auto w-full max-w-md rounded-2xl bg-[#0e1525] border border-orange-500 text-white p-8 shadow-2xl relative">
              <button
                className="absolute top-3 left-3 text-white hover:text-orange-400 transition"
                onClick={() => setIsOpen(false)}
              >
                <HiX size={24} />
              </button>

              <h2 className="text-xl font-bold text-center mb-4">
                ورود به حساب کاربری
              </h2>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("ایمیل معتبر نیست")
                    .required("ایمیل الزامی است"),
                  password: Yup.string()
                    .min(6, "حداقل ۶ کاراکتر")
                    .required("رمز عبور الزامی است"),
                })}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                  const res = await signIn("credentials", {
                    redirect: false,
                    email: values.email,
                    password: values.password,
                  });

                  if (res?.error) {
                    setErrors({ email: "نام کاربری یا رمز عبور اشتباه است" });
                  } else {
                    window.location.href = "/landing";
                  }

                  setSubmitting(false);
                }}
              >
                <Form className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm">ایمیل</label>
                    <div className="relative">
                      <Field
                        name="email"
                        type="email"
                        className="w-full py-2 pr-4 pl-10 rounded-lg bg-[#1f2937] border border-gray-500 focus:ring-2 focus:ring-orange-400"
                      />
                      <HiOutlineMail
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm">رمز عبور</label>
                    <div className="relative">
                      <Field
                        name="password"
                        type="password"
                        className="w-full py-2 pr-4 pl-10 rounded-lg bg-[#1f2937] border border-gray-500 focus:ring-2 focus:ring-orange-400"
                      />
                      <HiLockClosed
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
                  >
                    ورود
                  </button>
                </Form>
              </Formik>

              <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6">
                <button
                  onClick={() => signIn("google")}
                  className="flex items-center gap-2 bg-white text-black w-full py-2 px-4 rounded-lg hover:bg-gray-200 transition"
                >
                  <FcGoogle size={20} />
                  ورود با گوگل
                </button>
                <button
                  onClick={() => signIn("github")}
                  className="flex items-center gap-2 bg-black text-white w-full py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                >
                  <FaGithub size={20} />
                  ورود با گیت‌هاب
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
