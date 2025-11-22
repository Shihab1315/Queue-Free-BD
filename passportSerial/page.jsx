"use client";

import { useState } from "react";

export default function PassportBooking() {
  const [office, setOffice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tokenData, setTokenData] = useState(null);

  const offices = [
    "Dhaka Passport Office",
    "Chittagong Passport Office",
    "Khulna Passport Office",
    "Sylhet Passport Office",
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(?:\+88|01)?\d{11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!office || !name || !email || !phone) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address!");
      return;
    }

    if (!validatePhone(phone)) {
      alert("⚠️ Please enter a valid Bangladeshi phone number! (Example: 01712345678 or +8801712345678)");
      return;
    }

    const token = Math.floor(Math.random() * 9000 + 1000);
    const wait = Math.floor(Math.random() * 30 + 10);

    setTokenData({
      office,
      token: "PPT-" + token,
      wait: `${wait} minutes`,
      name,
      email,
      phone,
      timestamp: new Date().toLocaleString(),
    });
  };

  const copyToken = () => {
    if (tokenData) {
      navigator.clipboard.writeText(tokenData.token);
      alert("✅ Token copied successfully!");
    }
  };

  const resetForm = () => {
    setTokenData(null);
    setOffice("");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 p-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Passport Token Booking
        </h1>

        {!tokenData ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Office Dropdown */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Select Passport Office:
              </label>
              <select
                className="w-full p-2 border rounded outline-none focus:border-purple-600 bg-white text-black dark:bg-gray-700 dark:text-white appearance-none"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
                required
              >
                <option value="">-- Choose Office --</option>
                {offices.map((o) => (
                  <option key={o} value={o} className="text-black dark:text-white">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-2 border rounded outline-none focus:border-purple-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded outline-none focus:border-purple-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="e.g., 01712345678"
                className="w-full p-2 border rounded outline-none focus:border-purple-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Format: 01712345678 or +8801712345678</p>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition"
            >
              Book Token
            </button>
          </form>
        ) : (
          <div className="token-box bg-purple-50 dark:bg-gray-700 p-6 rounded-lg text-center">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                Your Token is Confirmed ✅
              </h3>
            </div>
            
            <div className="space-y-2 text-left mb-4">
              <p><b>Passport Office:</b> {tokenData.office}</p>
              <p><b>Full Name:</b> {tokenData.name}</p>
              <p><b>Email:</b> {tokenData.email}</p>
              <p><b>Phone:</b> {tokenData.phone}</p>
              <p><b>Token Number:</b> <span className="font-mono text-lg">{tokenData.token}</span></p>
              <p><b>Estimated Wait Time:</b> {tokenData.wait}</p>
              <p><b>Booking Time:</b> {tokenData.timestamp}</p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={copyToken}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                Copy Token
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
              >
                Book Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}