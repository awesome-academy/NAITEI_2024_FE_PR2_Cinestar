import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../i18n";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="flex justify-center items-center h-screen bg-[#0f172a]">
        <div className="w-600 px-32 text-white">
          <h2 className="text-center uppercase text-6xl">Quên mật khẩu</h2>
          <p className="mt-4 text-center">
            Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn hướng dẫn để
            tạo mật khẩu mới
          </p>
          <div className="flex flex-col items-center mt-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/5 px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="mt-4 w-3/5 px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition duration-150 ease-in-out">
              GỬI MÃ XÁC MINH
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;