"use client";
import { useState } from "react";
import { login, signup } from "./actions";
import { useRouter } from "next/navigation";
import { translationDictionary } from "./translations";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await login(formData);
    if (response.error) {
      const translatedError =
        translationDictionary[response.error] || response.error;
      setError(translatedError);
    } else {
      router.push("/");
    }
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form") as HTMLFormElement;
    if (!form) {
      console.error("Form not found");
      return;
    }
    const formData = new FormData(form);
    const response = await signup(formData);
    if (response.error) {
      const translatedError =
        translationDictionary[response.error] || response.error;
      setError(translatedError);
    } else {
      router.push("/");
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
      dir="rtl"
    >
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm mb-1">
          البريد الالكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          onChange={clearError}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm mb-1">
          كلمة المرور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          onChange={clearError}
        />
      </div>
      {error && (
        <p className="text-red-600 bg-red-100 p-3 text-sm m-2 text-center">
          {error}
        </p>
      )}
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          تسجيل الدخول
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="w-full border-b border-gray-300"></div>
        <div className="mx-4 text-gray-600 text-sm">او</div>
        <div className="w-full border-b border-gray-300"></div>
      </div>

      <div className="flex items-center mb-3">
        <button
          type="button"
          onClick={handleSignup}
          className="text-slate-950	 bg-gray-200 text-sm focus:outline-none hover:underline p-3 rounded-md"
        >
          انشاء حساب
        </button>
      </div>
    </form>
  );
}
