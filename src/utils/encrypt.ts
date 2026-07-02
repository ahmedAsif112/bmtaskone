import CryptoJS from "crypto-js";

export const encryptPassword = (password: string) => {
    const secret = process.env.NEXT_PUBLIC_PASSWORD_SECRET_KEY!;

    return CryptoJS.AES.encrypt(password, secret).toString();
};