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
        return response.data;
    } catch (error) {
        throw new Error("로그인에 실패했습니다.");
    }
};
