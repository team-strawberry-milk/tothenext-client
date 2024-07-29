import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (email, name, password) => {
    try {
        const response = await axios.post(`${apiUrl}/accounts/signup`, {
            email: email,
            name: name,
            password: password,
        });

        return response.data;
    } catch (error) {
        throw new Error("회원가입에 실패했습니다.");
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/accounts/signin`, {
            email: email,
            password: password,
        });
        const { token } = response.data;
        if (typeof window !== "undefined") {
            localStorage.setItem("logintoken", token);
        }
        return response.data;
    } catch (error) {
        throw new Error("로그인에 실패했습니다.");
    }
};

export const isLoggedIn = () => {
    if (typeof window !== "undefined") {
        return !!localStorage.getItem("logintoken");
    }
    return false;
};
