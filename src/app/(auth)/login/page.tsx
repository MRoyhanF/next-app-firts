"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const hendleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/dashboard",
      });
      if (!res?.error) {
        e.target.reset();
        setIsLoading(false);
        push("/dashboard");
      } else {
        setIsLoading(false);
        if (res.status === 401) {
          setError("Email or password is incorrect");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-100 flex justify-center items-center flex-col">
      {error !== "" && <div className="text-red-600 font-bold mb-3">{error}</div>}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sign in</h3>
        </div>
        <div className="p-4 md:p-5 w-96">
          <form className="space-y-4" onSubmit={(e) => hendleLogin(e)}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
