"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Stethoscope, 
  Building, 
  FileText, 
  ArrowRight, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  Zap,
  Heart,
  Banknote,
  UserCheck
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Hospital Services",
    desc: "Book doctor appointments, consultations, and medical tests without waiting in long queues.",
    features: ["Doctor Appointment", "Medical Tests", "Emergency Token", "Specialist Consultation"],
    link: "/HospitalAppointment",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    delay: "0",
    stats: "2K+ Bookings"
  },
  {
    icon: Building,
    title: "Banking Services",
    desc: "Reserve your service token for banking operations before reaching the branch.",
    features: ["Account Opening", "Cash Transaction", "Loan Service", "Card Services"],
    link: "/bankSerial",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    delay: "200",
    stats: "1.5K+ Bookings"
  },
  {
    icon: FileText,
    title: "Passport Services",
    desc: "Book passport application, renewal, and other services securely and quickly.",
    features: ["New Application", "Renewal", "Visa Service", "Document Verification"],
    link: "/passportSerial",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    delay: "400",
    stats: "800+ Bookings"
  },
];

// Custom Icon Components to replace CDN images
const ServiceIcons = {
  Hospital: Heart,
  Bank: Banknote,
  Passport: UserCheck
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 mb-6">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              One Platform, Endless Services
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience seamless token booking across multiple services. Save time, avoid queues, 
            and get real-time updates for all your essential needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${service.delay}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className={`w-10 h-10 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {service.stats.split('+')[0]}+
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      This Month
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Save 2+ hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>100% Secure</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={service.link}
                    className={`group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r ${service.color} hover:shadow-xl text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800"></div>
                </div>

                {/* Popular Badge */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Most Popular
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "50,000+", label: "Happy Users" },
            { number: "2,500+", label: "Daily Bookings" },
            { number: "500+", label: "Service Centers" },
            { number: "99.9%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Skip the Queue?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their service experience. 
              Start booking your tokens in just 30 seconds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Download App
              </button>
            </div>
          </div>
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}