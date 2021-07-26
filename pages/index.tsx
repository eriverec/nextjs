import React from "react";
import Link from "next/link";
const Index = () => {

  return (
    <div>
      <section className="bg-white {-- h-screen --}">
        <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
          
          <form
            
            class="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900"
          >
            <div class="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16">
              <div class="px-2 sm:px-6">
                <h3 class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
                  Login To Your Account
                </h3>
              </div>
              <div class="mt-8 w-full px-2 sm:px-6">
                <div class="flex flex-col mt-8">
                  <label
                    for="email"
                    class="text-lg font-semibold leading-tight"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    aria-required="true"
                    name="email"
                    class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                    type="email"
                  />
                </div>
                <div class="flex flex-col mt-5">
                  <label
                    for="password"
                    class="text-lg font-semibold fleading-tight"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    required
                    aria-required="true"
                    name="password"
                    type="password"
                    class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                  />
                </div>
              </div>
              <div class="pt-6 w-full flex justify-between px-2 sm:px-6">
                <div class="flex items-center">
                  <input
                    id="rememberme"
                    name="rememberme"
                    class="w-3 h-3 mr-2"
                    type="checkbox"
                  />
                  <label for="rememberme" class="text-xs">
                    Remember Me
                  </label>
                </div>
                <a class="text-xs text-indigo-600" href="javascript: void(0)">
                  Forgot Password?
                </a>
              </div>
              <div class="px-2 sm:px-6">
                <button
                 
                  class="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6"
                >
                  <Link href="/home">Login</Link>
                  
                </button>
                <p class="mt-6 text-xs">
                  Don’t Have An Account?{" "}
                  <a
                    class="underline text-indigo-600"
                    href="javascript: void(0)"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Index;
