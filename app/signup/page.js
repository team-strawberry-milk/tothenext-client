"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { registerUser } from "../../api/registerUser.js";
import { useRouter } from "next/navigation";
import ReactModal from "react-modal";
import { Modal } from "@/components/common/Modal.js";
import TextInput from "@/components/auth/TextInput.js";
import Button from "@/components/common/Button.js";

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
        <section className="py-28 overflow-hidden">
            <div className=" max-w-lg mx-auto py-12 px-16 bg-white border border-slate-200 rounded-xl">
                <h3 className="mb-5 text-3xl text-gray-500 font-semibold">
                    Sign Up
                </h3>
                <p className="mb-8 text-base text-gray-300 font-medium">
                    Create an account to get started.
                </p>
                <form action="/signup" method="POST" onSubmit={handleSubmit}>
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        setValue={handleChangeEmail}
                    />
                    <TextInput
                        label="Username"
                        type="text"
                        placeholder="Username"
                        value={name}
                        setValue={handleChangeName}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        setValue={handleChangePassword}
                    />
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        setValue={handleChangePasswordConfirm}
                    />
                    <div className="mt-8">
                        <Button type="submit" text="Sign up" />
                    </div>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                errorMessage={errorMessage}
            />
        </section>
    );
}
