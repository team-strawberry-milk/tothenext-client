"use client";

import React, { useState, useEffect } from "react";
import { isLoggedIn as checkLoggedIn } from "@/api/registerUser";
import { BsPerson } from "react-icons/bs";

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(checkLoggedIn());
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("logintoken");
        setLoggedIn(false);
    };

    return (
        <header className="flex justify-between items-center relative px-5 py-3">
            <div className="flex-shrink-0">
                <a href="/">
                    <img
                        src="/tothenext_logo.png"
                        alt="logo"
                        className="h-16 my-2"
                    />
                </a>
            </div>
            <nav className="hidden lg:flex gap-5 absolute left-1/2 transform -translate-x-1/2">
                <a
                    href="/hub"
                    className="text-base text-gray-800 hover:text-gray-600"
                >
                    Hub
                </a>
                <a
                    href="/teammate"
                    className="text-base text-gray-800 hover:text-gray-600"
                >
                    Teammate
                </a>
                <a
                    href="/activity"
                    className="text-base text-gray-800 hover:text-gray-600"
                >
                    Activity
                </a>
                <a
                    href="/profile"
                    className="text-base text-gray-800 hover:text-gray-600"
                >
                    Profile
                </a>
            </nav>
            <div className="flex items-center gap-3">
                {loggedIn ? (
                    <>
                        <BsPerson className="w-8 h-8 border-2 border-black rounded-full p-1" />
                        <button
                            onClick={handleLogout}
                            className="text-base bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <>
                        <a
                            href="/signin"
                            className="text-base bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
                        >
                            Log in
                        </a>
                        <a
                            href="/signup"
                            className="text-base bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                        >
                            Sign up
                        </a>
                    </>
                )}
            </div>
        </header>
    );
}
