import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../i18n";

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRemember, setLoginRemember] = useState(false);
  const [registerFullName, setRegisterFullName] = useState("");
  const [registerBirthday, setRegisterBirthday] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerIdNumber, setRegisterIdNumber] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    console.log("Đang đăng nhập:", {
      username: loginUsername,
      password: loginPassword,
      remember: loginRemember,
    });
  };

  const handleRegister = () => {
    console.log("Đang đăng ký:", {
      fullName: registerFullName,
      birthday: registerBirthday,
      phone: registerPhone,
      username: registerUsername,
      idNumber: registerIdNumber,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: registerConfirmPassword,
    });
  };
  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a] px-32 w-600">
        <div className="justify-left items-left h-full">
          <div className={`auth-tabs flex justify-left w-2/5`}>
            <div
              className={`rounded-t-lg p-1 w-1/2 pr-3 ${
                activeTab === "login"
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
            >
              <button
                className={`w-300 px-4 py-2 rounded-lg transition-colors w-full m-1 ${
                  activeTab === "login"
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("login")}
              >
                ĐĂNG NHẬP
              </button>
            </div>
            <div
              className={`rounded-t-lg p-1 w-1/2 pr-3 ${
                activeTab === "register"
                  ? "bg-white text-black"
                  : "bg-transparent text-white "
              }`}
            >
              <button
                className={`w-300 px-4 py-2 rounded-lg transition-colors w-full m-1 ${
                  activeTab === "register"
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("register")}
              >
                ĐĂNG KÝ
              </button>
            </div>
          </div>

          <div className="w-2/5 bg-white shadow-lg rounded-b-lg p-8">
            {activeTab === "login" && (
              <div className="auth-form space-y-4">
                <label className="block">
                  Tài khoản, Email hoặc số điện thoại{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tài khoản"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={loginRemember}
                    onChange={(e) => setLoginRemember(e.target.checked)}
                    className="mr-2"
                  />
                  <label>Ghi nhớ đăng nhập</label>
                </div>
                <div className="text-right underline">
                  <a href="/forgotpassword/">Quên mật khẩu?</a>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Đăng nhập
                </button>
              </div>
            )}

            {activeTab === "register" && (
              <div className="auth-form space-y-4">
                <label className="block">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={registerFullName}
                  onChange={(e) => setRegisterFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Ngày sinh <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Ngày sinh"
                  value={registerBirthday}
                  onChange={(e) => setRegisterBirthday(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={registerPhone}
                  onChange={(e) => setRegisterPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Tên đăng nhập <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  CCCD/CMND <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="CCCD/CMND"
                  value={registerIdNumber}
                  onChange={(e) => setRegisterIdNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                <label className="block">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} className="h-5 w-5" />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <label className="block">
                  Xác thực mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác thực mật khẩu"
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} className="h-5 w-5" />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center align-top">
                  <input
                    type="checkbox"
                    checked={loginRemember}
                    onChange={(e) => setLoginRemember(e.target.checked)}
                    className="mr-2 align-top"
                  />{" "}
                  <label>
                    Khách hàng đã đồng ý các điều khoản, điều kiện của thành
                    viên Cinestar
                  </label>
                </div>
                <button
                  onClick={handleRegister}
                  className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-500 text-default-color rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition duration-150 ease-in-out"
                >
                  Đăng ký
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;