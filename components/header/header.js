import React from "react";

export default function Header() {
  return (
    <section className="overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between py-5">
          <div className="w-auto">
            <a className="inline-block" href="/">
              <img src="/tothenext_logo.png" alt="logo" className="h-10" />
            </a>
          </div>
          <div className="w-auto hidden lg:block">
            <ul className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center">
              <li className="mr-12">
                <a
                  href="/hub"
                  className="inline-block font-medium text-base text-gray-500 hover:text-gray-600"
                >
                  Hub
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="/teammate"
                  className="inline-block font-medium text-base text-gray-500 hover:text-gray-600"
                >
                  Teammate
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="/activity"
                  className="inline-block font-medium text-base text-gray-500 hover:text-gray-600"
                >
                  Activity
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="inline-block font-medium text-base text-gray-500 hover:text-gray-600"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto hidden lg:block">
            <div className="flex flex-wrap items-center -m-2">
              <div className="auto p-2">
                <a
                  href="#"
                  className="inline-flex justify-center text-center px-4 py-2 font-medium text-gray-900 bg-white hover:bg-gray-50 focus:bg-gray-50 rounded-md border border-gray-200 shadow-shadow-gray-300 focus:shadow-none transition duration-200"
                >
                  <span className="inline-flex items-center">Log in</span>
                  <span className />
                </a>
              </div>
              <div className="auto p-2">
                <a
                  href="#"
                  className="inline-flex justify-center text-center px-4 py-2 font-medium text-white bg-[#305ad9] hover:bg-[#274bbd] focus:bg-lightgrey-700 rounded-md shadow-shadow-lightgrey-900 focus:shadow-none transition duration-200"
                >
                  <span className="inline-flex items-center">Sign up</span>
                  <span className />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto lg:hidden">
            <a className="inline-block" href="#">
              <svg
                width={51}
                height={51}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="navbar-burger text-lightgrey-500"
              >
                <rect width={56} height={56} rx={28} fill="currentColor" />
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
