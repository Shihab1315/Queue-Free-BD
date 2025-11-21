"use client";
import { useState } from "react";

export default function BankBooking() {
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [tokenData, setTokenData] = useState(null);

  const banks = [
    "Sonali Bank",
    "Islami Bank",
    "Dutch-Bangla Bank",
    "BRAC Bank",
    "AB Bank",
    "Eastern Bank",
    "Prime Bank",
    "City Bank",
  ];

  const services = [
    "Account Opening",
    "Cash Deposit",
    "Cash Withdrawal",
    "Loan Service",
    "Card Service",
    "Online Banking",
    "Cheque Book",
    "Other Services"
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

    if (!bank || !branch || !name || !email || !phone || !service) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address!");
      return;
    }

    if (!validatePhone(phone)) {
      alert("⚠️ Please enter a valid Bangladeshi phone number! (Example: 01712345678)");
      return;
    }

    const token = Math.floor(Math.random() * 9000 + 1000);
    const wait = Math.floor(Math.random() * 20 + 5);

    setTokenData({
      bank,
      branch,
      token: "BNK-" + token,
      wait: `${wait} minutes`,
      name,
      email,
      phone,
      service,
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
    setBank("");
    setBranch("");
    setName("");
    setEmail("");
    setPhone("");
    setService("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-lg p-8 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Bank Token Booking
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Book your token for quick and easy banking services
          </p>
        </div>

        {!tokenData ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bank Selection */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700 dark:text-gray-200">
                Select Bank <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                required
              >
                <option value="" className="text-gray-400">-- Choose a Bank --</option>
                {banks.map((b) => (
                  <option key={b} value={b} className="text-gray-800 dark:text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Branch Name */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700 dark:text-gray-200">
                Branch Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter branch location or name"
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700 dark:text-gray-200">
                Service Type <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="" className="text-gray-400">-- Select Service --</option>
                {services.map((s) => (
                  <option key={s} value={s} className="text-gray-800 dark:text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block font-semibold text-gray-700 dark:text-gray-200">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block font-semibold text-gray-700 dark:text-gray-200">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="01712345678"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Bangladeshi format: 01XXXXXXXXX
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700 dark:text-gray-200">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              📋 Book Token Now
            </button>
          </form>
        ) : (
          <div className="token-box bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl text-center border-2 border-blue-200 dark:border-blue-800">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
              Token Booked Successfully! ✅
            </h3>
            
            {/* Token Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-inner">
              <div className="space-y-3 text-left">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Bank:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.bank}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Branch:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.branch}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Service:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.service}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Name:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Phone:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.phone}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Email:</span>
                  <span className="text-gray-800 dark:text-white">{tokenData.email}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Token No:</span>
                  <span className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400">{tokenData.token}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Wait Time:</span>
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">{tokenData.wait}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600 dark:text-gray-300">Booking Time:</span>
                  <span className="text-gray-800 dark:text-white text-sm">{tokenData.timestamp}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={copyToken}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Token
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Book Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}