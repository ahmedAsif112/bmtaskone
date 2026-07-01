import React from 'react'
import { LockOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const FormLogin = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form:", values);
    };

    return (
        <div className="flex flex-1 items-center justify-center px-4 sm:px-6 w-full">
            <div className="!rounded-[28px] sm:!rounded-3xl !bg-white !px-6 !py-4 lg:!px-7 lg:!py-3 !shadow-xl w-full max-w-md self-center">

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