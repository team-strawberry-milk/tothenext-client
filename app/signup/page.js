"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { registerUser } from "../../api/registerUser.js";
import { useRouter } from "next/navigation";
import ReactModal from "react-modal";
import { Modal } from "@/components/common/Modal.js";

export default function Signup() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectAfterClose, setRedirectAfterClose] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
        setErrorMessage("");
        if (redirectAfterClose) {
            router.push("/");
        }
    };
    const openModal = (message, redirect = false) => {
        setErrorMessage(message);
        setModalIsOpen(true);
        setRedirectAfterClose(redirect);
    };

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const router = useRouter();

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangeName = (e) => setName(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangePasswordConfirm = (e) =>
        setPasswordConfirm(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            openModal("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const data = await registerUser(email, name, password);
            console.log(data);
            openModal("회원가입이 완료되었습니다!", true);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className=" flex items-center justify-center min-h-screen">
            <Head>
                <title>회원가입 페이지</title>
            </Head>

            <div className="bg-white border border-slate-200 rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    회원가입
                </h2>
                <form action="/signup" method="POST" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-300 pl-2 pb-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="email@example.com"
                                className="w-full border-none focus:outline-none"
                                required
                                onChange={handleChangeEmail}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-300 pl-2 pb-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="아이디를 입력해주세요"
                                className="w-full border-none focus:outline-none"
                                required
                                onChange={handleChangeName}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-300 pl-2 pb-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={handleChangePassword}
                                className="w-full border-none focus:outline-none"
                                required
                            />
                            <i className="fas fa-eye text-gray-400 ml-2 cursor-pointer"></i>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center border-b border-gray-300 pl-2 pb-2">
                            <input
                                type="password"
                                name="passwordcheck"
                                placeholder="비밀번호를 확인해주세요"
                                onChange={handleChangePasswordConfirm}
                                className="w-full border-none focus:outline-none"
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="promotion"
                            value="yes"
                            className="mr-2"
                        />
                        <label className="text-sm">광고 수신 동의(선택)</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                    >
                        가입하기
                    </button>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                errorMessage={errorMessage}
            />
        </div>
    );
}
