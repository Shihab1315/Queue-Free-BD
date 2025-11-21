"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  LogIn,
  UserPlus,
  QrCode,
  Phone,
  Mail,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(currentUser);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/login", label: "Login", icon: LogIn },
    { href: "/registration", label: "Register", icon: UserPlus },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
            : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-xl ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <QrCode
                  className={`w-6 h-6 ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isScrolled ? "text-gray-800 dark:text-white" : "text-white"
                  }`}
                >
                  BD Queue-Free
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-blue-100"
                  }`}
                >
                  Digital Bangladesh
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      isScrolled
                        ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                        : "text-white hover:bg-white/20 backdrop-blur-sm"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Contact Info - Desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                <div
                  className={`flex items-center space-x-2 ${
                    isScrolled
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-blue-100"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">16545</span>
                </div>
                <div
                  className={`flex items-center space-x-2 ${
                    isScrolled
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-blue-100"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@bdqueuefree.gov.bd</span>
                </div>
              </div>

              <div className="border-2 rounded-full px-3 py-1 cursor-pointer flex justify-center">
                {/* <img src="" alt="" /> */}
               <Link href="/dashboard"> <h3>{currentUser.fullName}</h3></Link>
              </div>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {item.label}
                    </span>
                  </a>
                );
              })}

              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">Helpline: 16545</span>
                </div>
                <div className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">support@bdqueuefree.gov.bd</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
