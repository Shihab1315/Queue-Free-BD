"use client";
export default function Login() {
  return (
    <div
      id="login"
      className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow fade-in-up"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <input
        className="w-full p-3 mb-4 rounded border"
        placeholder="Username"
      />
      <input
        className="w-full p-3 mb-4 rounded border"
        placeholder="Password"
        type="password"
      />
      <button className="w-full p-3 bg-blue-600 text-white rounded font-semibold">
        Login
      </button>
    </div>
  );
}
