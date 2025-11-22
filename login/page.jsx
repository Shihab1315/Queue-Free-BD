"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  Smartphone,
  Mail,
  Shield,
  QrCode,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QueueFreeLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email"); // 'username', 'email', 'phone'
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  // Mock user database - In real app, this would be from backend
  const regesterUser  = JSON.parse(localStorage.getItem("userData")) || [];
console.log(regesterUser)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation
      if (!formData[loginMethod] || !formData.password) {
        alert("⚠️ Please fill in all required fields!");
        setIsLoading(false);
        return;
      }

      // Find user based on login method
      let user = null;

      if (loginMethod === "email") {
        user = regesterUser.find(
          (u) => u.email === formData.email && u.password === formData.password
        );
      } else if (loginMethod === "phone") {
        user = regesterUser.find(
          (u) => u.phone === formData.phone && u.password === formData.password
        );
      } else if (loginMethod === "username") {
        user = regesterUser.find(
          (u) =>
            u.username === formData.username && u.password === formData.password
        );
      }

      if (user) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Store user data in localStorage (in real app, use context or state management)
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        if (formData.rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        console.log("Login successful:", user);
        alert(`🎉 Welcome back, ${user.fullName}!`);

        // Redirect to dashboard or home page
        router.push("/");
      } else {
        alert(
          "❌ Invalid credentials! Please check your email/phone and password."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("❌ Login failed! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Test function for quick login (remove in production)
  const fillTestCredentials = () => {
    setFormData({
      email: "john.doe@example.com",
      phone: "01712345678",
      username: "johndoe",
      password: "password123",
      rememberMe: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Test Credentials Button - Remove in production */}
      <button
        onClick={fillTestCredentials}
        className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold z-10"
      >
        Fill Test Credentials
      </button>

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Info */}
        <div className="text-center lg:text-left space-y-8 text-white">
          <div className="space-y-6">
            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  BD Queue-Free
                </h1>
                <p className="text-blue-200 text-lg">Digital Bangladesh</p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Skip the Queue,
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Embrace Digital Freedom
              </span>
            </h2>

            <p className="text-xl text-blue-200 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience hassle-free token booking for all government and
              private services across Bangladesh.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Secure Access</h4>
              <p className="text-blue-200 text-sm">
                Bank-level security for all your data
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                <Smartphone className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Mobile Friendly</h4>
              <p className="text-blue-200 text-sm">
                Access from any device, anywhere
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Multi-Service</h4>
              <p className="text-blue-200 text-sm">
                Passport, Bank, Hospital & more
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3">
                <QrCode className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Digital Token</h4>
              <p className="text-blue-200 text-sm">
                QR based smart token system
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Welcome Back</h3>
            <p className="text-blue-200">
              Sign in to your BD Queue-Free account
            </p>
          </div>

          {/* Login Method Tabs */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-6">
            <button
              type="button"
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === "email"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === "phone"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              Phone
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod("username")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === "username"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              Username
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dynamic Input Field based on Login Method */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                {loginMethod === "username" && "Username"}
                {loginMethod === "email" && "Email Address"}
                {loginMethod === "phone" && "Phone Number"}
              </label>
              <div className="relative">
                {loginMethod === "username" && (
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                )}
                {loginMethod === "email" && (
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                )}
                {loginMethod === "phone" && (
                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                )}

                <input
                  type={
                    loginMethod === "email"
                      ? "email"
                      : loginMethod === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={loginMethod}
                  placeholder={
                    loginMethod === "username"
                      ? "Enter your username"
                      : loginMethod === "email"
                      ? "Enter your email"
                      : "Enter your phone number"
                  }
                  value={formData[loginMethod]}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl outline-none focus:border-blue-400 text-white placeholder-blue-300 transition-all duration-200 backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border-2 border-white/20 rounded-xl outline-none focus:border-blue-400 text-white placeholder-blue-300 transition-all duration-200 backdrop-blur-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 bg-white/20 border-white/30"
                />
                <span className="text-sm text-blue-200">Remember me</span>
              </label>

              <button
                type="button"
                className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-2xl hover:shadow-3xl transform transition-all duration-200 text-lg ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-y-0.5"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In to BD Queue-Free"
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-blue-200">
                  New to BD Queue-Free?
                </span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <Link
                href="/registration"
                className="w-full inline-block bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:border-white/40 text-center"
              >
                Create New Account
              </Link>
            </div>
 
             
          </form>
        </div>
      </div>
    </div>
  );
}
