"use client";

import TextInput from "@/components/auth/TextInput";
import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import AuthButton from "@/components/auth/AuthButton";
import { useRouter } from "next/navigation";
import { loginUser, isLoggedIn } from "../../api/registerUser.js";
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectAfterClose, setRedirectAfterClose] = useState(false);

    const openModal = (message, redirect = false) => {
        setErrorMessage(message);
        setModalIsOpen(true);
        setRedirectAfterClose(redirect);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setErrorMessage("");
        if (redirectAfterClose) {
            router.push("/");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(email, password);
            console.log(data);
            openModal("로그인에 성공했습니다", true);
        } catch (error) {
            console.error(error.message);
            openModal("로그인에 실패했습니다");
        }
    };

    useEffect(() => {
        if (isLoggedIn()) {
            router.push("/");
        }
    }, [router]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            const url = "https://oauth2.googleapis.com/token";
            const params = new URLSearchParams();

            params.append("code", code);
            params.append(
                "client_id",
                process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
            );
            params.append("client_secret", process.env.GOOGLE_CLIENT_SECRET);
            params.append("redirect_uri", "http://localhost:3000");
            params.append("grant_type", "authorization_code");

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Content-Length": "0", // Note: Content-Length header is typically set automatically by the browser for fetch
                },
                body: params,
            };

            fetch(url, options)
                .then((response) => {
                    if (!response.ok) {
                        console.error(`HTTP error! status: ${response.status}`);
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data.access_token);
                })
                .catch((error) => {
                    console.error("Error fetching access token:", error);
                    throw error;
                });
        }
    }, []);

    const handleLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const redirectUri = "http://localhost:3000";
        console.log(clientId);
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;
        window.location.href = authUrl;
    };

    return (
        <section className="py-28 overflow-hidden">
            <div className="max-w-lg mx-auto py-12 px-16 bg-white border border-slate-200 rounded-xl">
                <h3 className="mb-5 text-3xl text-gray-500 font-semibold">
                    Sign In
                </h3>
                <p className="mb-8 text-base text-gray-300 font-medium">
                    Welcome back! Log in to continue.
                </p>
                <form action="#">
                    <div className="flex flex-wrap -m-3">
                        <TextInput
                            label="Email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            setValue={(e) => setEmail(e.target.value)}
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            setValue={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <div className="mt-8">
                    <Button text="Sign In" onClick={handleSubmit} />
                    <AuthButton
                        text="Sign in with Google"
                        image="/images/forms/google.svg"
                        onClick={handleLogin}
                    />
                </div>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <p>{errorMessage}</p>
                <div className="flex justify-center">
                    <button
                        onClick={closeModal}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        닫기
                    </button>
                </div>
            </ReactModal>
        </section>
    );
}
