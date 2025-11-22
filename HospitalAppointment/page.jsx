"use client";
import { useState, useEffect } from "react";

export default function HospitalAppointment() {
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [doctorsList, setDoctorsList] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  const hospitalOptions = [
    "Dhaka Medical College",
    "Square Hospital",
    "United Hospital",
    "Ibn Sina Hospital",
    "Apollo Hospital",
    "Bangabandhu Medical College",
  ];

  const deptDoctors = {
    Medicine: ["Dr. Rahman", "Dr. Karim", "Dr. Fatima"],
    Cardiology: ["Dr. Alam", "Dr. Hasan", "Dr. Zaman"],
    Orthopedics: ["Dr. Sultana", "Dr. Hossain", "Dr. Ahmed"],
    ENT: ["Dr. Rafi", "Dr. Nahar", "Dr. Chowdhury"],
    Neurology: ["Dr. Islam", "Dr. Khan", "Dr. Jahan"],
    Pediatrics: ["Dr. Akter", "Dr. Mahmud", "Dr. Rahman"],
  };

  // Update doctor list when department changes
  useEffect(() => {
    if (department) {
      setDoctorsList(deptDoctors[department] || []);
      setDoctor("");
    }
  }, [department]);

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
    
    if (!hospital || !department || !doctor || !name || !email || !mobileNo) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address!");
      return;
    }

    if (!validatePhone(mobileNo)) {
      alert("⚠️ Please enter a valid Bangladeshi phone number! (Example: 01712345678)");
      return;
    }

    // Generate token & appointment time
    const token = Math.floor(Math.random() * 100) + 1;
    const time = new Date();
    const appointmentTime = new Date(time.getTime() + 30 * 60000); // 30 minutes from now

    setConfirmation({
      hospital,
      department,
      doctor,
      name,
      email,
      mobileNo,
      token: `HOS-${token.toString().padStart(3, '0')}`,
      bookingTime: time.toLocaleString(),
      appointmentTime: appointmentTime.toLocaleTimeString(),
    });
  };

  const copyToken = () => {
    navigator.clipboard.writeText(confirmation.token);
    alert("✅ Token copied to clipboard!");
  };

  const resetForm = () => {
    setConfirmation(null);
    setHospital("");
    setDepartment("");
    setDoctor("");
    setName("");
    setEmail("");
    setMobileNo("");
    setDoctorsList([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Hospital Appointment Booking
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Book your medical appointment online and save valuable time at the hospital
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-blue-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Book Online?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Skip long waiting queues
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Secure your preferred time slot
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Digital token management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Instant confirmation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  24/7 booking availability
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Emergency?</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  For emergency cases, please visit the hospital directly or call emergency services.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-gray-700">
              {!confirmation ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hospital Selection */}
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700 dark:text-gray-200">
                        Select Hospital <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                        required
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                      >
                        <option value="" className="text-gray-400">-- Choose Hospital --</option>
                        {hospitalOptions.map((h) => (
                          <option key={h} value={h} className="text-gray-800 dark:text-white">
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Department Selection */}
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700 dark:text-gray-200">
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option value="" className="text-gray-400">-- Choose Department --</option>
                        {Object.keys(deptDoctors).map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <label className="block font-bold text-gray-700 dark:text-gray-200">
                      Doctor Name <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                      required
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                    >
                      <option value="" className="text-gray-400">-- Choose Doctor --</option>
                      {doctorsList.map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700 dark:text-gray-200">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 shadow-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700 dark:text-gray-200">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="01712345678"
                        required
                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 shadow-sm"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Bangladeshi format: 01XXXXXXXXX
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-bold text-gray-700 dark:text-gray-200">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 shadow-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                  >
                    🏥 Book Appointment Now
                  </button>
                </form>
              ) : (
                /* Confirmation Section */
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                    Appointment Confirmed! 🎉
                  </h2>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 mb-6 border-2 border-green-200 dark:border-green-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div className="space-y-3">
                        <InfoRow label="Hospital" value={confirmation.hospital} />
                        <InfoRow label="Department" value={confirmation.department} />
                        <InfoRow label="Doctor" value={confirmation.doctor} />
                        <InfoRow label="Patient Name" value={confirmation.name} />
                      </div>
                      <div className="space-y-3">
                        <InfoRow label="Mobile" value={confirmation.mobileNo} />
                        <InfoRow label="Email" value={confirmation.email} />
                        <InfoRow label="Booking Time" value={confirmation.bookingTime} />
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-bold text-gray-700 dark:text-gray-200">Token No:</span>
                          <span className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-lg">
                            {confirmation.token}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={copyToken}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Token
                    </button>
                    <button
                      onClick={resetForm}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      New Appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for info rows
function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold text-gray-600 dark:text-gray-300">{label}:</span>
      <span className="text-gray-800 dark:text-white">{value}</span>
    </div>
  );
}