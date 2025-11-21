'use client'
import { 
  UserCheck, 
  Search, 
  Calendar, 
  BarChart3, 
  Bell, 
  Languages, 
  Settings, 
  Smartphone,
  Shield,
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: UserCheck,
      title: "User Registration & Login",
      description: "Secure access for citizens and organizations with multi-factor authentication.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Service Directory",
      description: "Comprehensive directory to select hospitals, banks, or government offices with ratings and reviews.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Token & Appointment Booking",
      description: "Choose preferred date and time slot with instant confirmation and digital token generation.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Queue Tracking Dashboard",
      description: "Real-time updates on running token numbers with estimated waiting time and live queue status.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Reminder Notifications",
      description: "Smart SMS/Email reminders before appointment time with rescheduling options.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Languages,
      title: "Multi-language Support",
      description: "Seamless Bangla and English interface with voice assistance for better accessibility.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Admin Panel",
      description: "Advanced dashboard for organizations to manage schedules, services, and queues efficiently.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Design",
      description: "Fully responsive design accessible from smartphones, tablets, and computers.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption and data protection ensuring your information stays safe and secure.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service availability with automated booking and support system.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Instant Confirmation",
      description: "Immediate booking confirmation with digital receipts and service details.",
      color: "from-lime-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick and efficient booking process with minimal steps and instant processing.",
      color: "from-amber-500 to-orange-500"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 mb-6">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Revolutionary Queue Management
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Why Choose BD Queue-Free?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of service management with our comprehensive suite of features 
            designed to make your life easier and save valuable time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
              </div>

              {/* Number Badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Experience Queue-Free Bangladesh?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their service experience with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Get Started Now
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-semibold py-3 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50K+", label: "Happy Users" },
            { number: "500+", label: "Service Centers" },
            { number: "10+", label: "Cities Covered" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}