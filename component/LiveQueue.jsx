'use client'
import { useState, useEffect } from 'react'
import { 
  Clock, 
  Users, 
  ArrowRight, 
  Eye, 
  TrendingUp, 
  AlertCircle,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react'

const queues = [
  { 
    title: 'Hospital Queue', 
    count: 5, 
    waitingTime: '15-20 min',
    trend: 'stable',
    alert: 'Hospital live queue coming soon!',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    icon: '🏥'
  },
  { 
    title: 'Bank Queue', 
    count: 18, 
    waitingTime: '30-45 min',
    trend: 'increasing',
    alert: 'Bank live queue coming soon!',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    icon: '💵'
  },
  { 
    title: 'Passport Office Queue', 
    count: 27, 
    waitingTime: '45-60 min',
    trend: 'decreasing',
    alert: 'Passport queue coming soon!',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    icon: '🛂'
  }
]

export default function LiveQueue() {
  const [isLive, setIsLive] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'increasing':
        return <TrendingUp className="w-4 h-4 text-red-500" />
      case 'decreasing':
        return <TrendingUp className="w-4 h-4 text-green-500 transform rotate-180" />
      default:
        return <TrendingUp className="w-4 h-4 text-yellow-500" />
    }
  }

  const getTrendText = (trend) => {
    switch(trend) {
      case 'increasing': return 'Queue Growing'
      case 'decreasing': return 'Queue Reducing'
      default: return 'Queue Stable'
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 mb-6">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {isLive ? 'LIVE UPDATES' : 'PAUSED'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 dark:from-white dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent mb-6">
            Live Queue Status
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time queue updates across all service centers. Monitor waiting times and plan your visit accordingly.
          </p>

          {/* Live Status Bar */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Last Updated: {currentTime.toLocaleTimeString()}</span>
            </div>
            <button
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                isLive 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
              }`}
            >
              {isLive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isLive ? 'Pause Updates' : 'Resume Live'}
            </button>
          </div>
        </div>

        {/* Queue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {queues.map((queue, index) => (
            <div
              key={index}
              onClick={() => alert(queue.alert)}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${queue.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className={`w-16 h-16 ${queue.bgColor} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {queue.icon}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {getTrendIcon(queue.trend)}
                    <span>{getTrendText(queue.trend)}</span>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Updated just now
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {queue.title}
                </h3>

                {/* Queue Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">People Waiting</span>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {queue.count}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-600 dark:text-gray-300">Est. Wait Time</span>
                    </div>
                    <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                      {queue.waitingTime}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Queue Progress</span>
                    <span>{Math.min(queue.count * 3, 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${queue.color} transition-all duration-1000`}
                      style={{ width: `${Math.min(queue.count * 3, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Click to Explore
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${queue.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800"></div>
              </div>

              {/* Live Indicator */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-4 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Queue data updates every 30 seconds. Numbers are approximate.
              </span>
            </div>
            <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
              <RefreshCw className="w-4 h-4" />
              Refresh Data
            </button>
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
  )
}