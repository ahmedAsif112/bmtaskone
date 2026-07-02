import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { LockOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import CryptoJS from "crypto-js";

interface LoginFormValues {
    username: string;
    password: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PASSWORD_SECRET_KEY = process.env.NEXT_PUBLIC_PASSWORD_SECRET_KEY;

const FormLogin = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onFinish = async (values: LoginFormValues) => {
        if (!BACKEND_URL || !PASSWORD_SECRET_KEY) {
            message.error("Missing backend URL or secret key in environment config.");
            return;
        }

        setLoading(true);
        try {
            // Encrypt the password with the shared secret before it leaves the browser
            const encryptedPassword = CryptoJS.AES.encrypt(
                values.password,
                PASSWORD_SECRET_KEY
            ).toString();

            const response = await fetch(`${BACKEND_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: values.username,
                    password: encryptedPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Login failed. Please check your credentials.");
            }

            // NOTE: adjust these keys based on the actual shape of your API's success response
            console.log("Login success:", data);
            message.success("Login successful!");

            // Example: persist the token if the API returns one
            if (data?.token) {
                localStorage.setItem("token", data.token);
            }

            router.push("/dashboard");

        } catch (error: any) {
            console.error("Login error:", error);
            message.error(error?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-1 items-center justify-center px-8 sm:px-8 w-full">
            <div className="!rounded-[28px] sm:!rounded-3xl !bg-white !px-6 !py-4 lg:!px-10 lg:!py-5 !shadow-xl w-full max-w-md self-center">

                {/* Heading */}
                <h1 className="!text-center !text-[24px] lg:!text-[26px] xl:!text-[30px] !font-extrabold !text-gray-900 !mb-2">
                    Welcome Back!
                </h1>

                {/* Subtitle */}
                <p className="!text-center !text-[14px] lg:!text-[13px] xl:!text-[15px] !text-black !mb-6">
                    Login to continue your learning journey
                </p>

                <Form
                    name="login"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    <Form.Item
                        name="username"
                        className="!mb-4"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined className="!mr-2 !text-black" />}
                            placeholder="Enter your username"
                            className="!rounded-2xl !border-none !bg-gray-100 !px-4 !py-2.5 lg:!py-3 !text-sm lg:!text-[13px]"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        className="!mb-4"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined className="!mr-2 !text-black" />}
                            placeholder="Enter your password"
                            className="!rounded-2xl !border-none !bg-gray-100 !px-4 !py-2.5 lg:!py-3 !text-sm lg:!text-[13px]"
                            iconRender={(visible) =>
                                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Form.Item className="!mb-2">
                        <div className="!flex !justify-end">
                            <a
                                href=""
                                className="!text-sm lg:!text-[12px] !font-medium !text-teal-500 hover:!text-teal-600"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item className="!mb-0">
                        <Button
                            block
                            htmlType="submit"
                            loading={loading}
                            className="!h-11 lg:!h-[46px] xl:!h-[45px] !rounded-full !bg-[#01A49E] !text-sm lg:!text-[12px] xl:!text-base !font-bold !text-white !shadow-lg hover:!opacity-90"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default FormLogin;