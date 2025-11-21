'use client'
import { useState, useEffect } from 'react'
import { Play, ArrowRight, Shield, Clock, Users, QrCode, Star, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  
  const heroTexts = [
    "Hospitals",
    "Banks", 
    "Passport Offices",
    "Government Services",
    "Utility Centers"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <span className="text-sm font-semibold">Join 50,000+ Happy Users</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          Skip The
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Queue.
          </span>
        </h1>

        {/* Animated Text */}
        <div className="h-20 mb-6 flex items-center justify-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90">
            Book Tokens for{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-text-change">
              {heroTexts[currentText]}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
          Get real-time updates, digital tokens, and instant confirmations. 
          <span className="block text-yellow-300 font-semibold mt-2">
            Save hours of waiting time!
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white font-semibold text-lg px-10 py-4 rounded-2xl hover:border-white/40 transition-all duration-300 flex items-center gap-3">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in-up delay-700">
          {[
            { icon: Clock, title: "Save 2+ Hours", desc: "Average time saved per visit" },
            { icon: Shield, title: "100% Secure", desc: "Bank-level encryption" },
            { icon: Users, title: "50K+ Users", desc: "Trusted across Bangladesh" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-white/80 animate-fade-in-up delay-1000">
          {[
            { number: "50K+", label: "Happy Users" },
            { number: "500+", label: "Service Centers" },
            { number: "10+", label: "Cities" },
            { number: "99.9%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>

      {/* Floating QR Code Element */}
      <div className="absolute top-20 right-20 hidden xl:block animate-float">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl">
          <QrCode className="w-24 h-24 text-white" />
          <p className="text-white text-sm mt-2 font-semibold">Scan to Download</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes text-change {
          0%, 20% { opacity: 1; transform: translateY(0); }
          25%, 45% { opacity: 0; transform: translateY(-20px); }
          50%, 70% { opacity: 1; transform: translateY(0); }
          75%, 95% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-text-change {
          animation: text-change 10s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}