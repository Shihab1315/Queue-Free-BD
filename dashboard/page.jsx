'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  Clock, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  QrCode, 
  Download,
  Bell,
  Search,
  Menu,
  X,
  User,
  Settings,
  LogOut,
  BarChart3,
  FileText,
  Smartphone,
  CreditCard,
  Stethoscope,
  MapPin,
  Home,
  TrendingUp,
  Eye,
  Share2,
  Phone,
  Mail,
  Map,
  ChevronRight,
  Star,
  Crown,
  Zap,
  Shield,
  BadgeCheck
} from 'lucide-react'
import Link from 'next/link' 

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [notifications, setNotifications] = useState([])
  const [currentTime, setCurrentTime] = useState('') 
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(currentUser);


  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-BD', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Mock data with dynamic values
  const dashboardStats = [
    {
      title: 'Active Tokens',
      value: '3',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      change: '+1 today',
      trend: 'up'
    },
    {
      title: 'Avg Waiting Time',
      value: '15 min',
      icon: Clock,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      change: '-5 min from last week',
      trend: 'down'
    },
    {
      title: 'Upcoming',
      value: '2',
      icon: Calendar,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      change: 'Next: Tomorrow 10:30 AM',
      trend: 'neutral'
    },
    {
      title: 'Completed',
      value: '12',
      icon: CheckCircle,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      change: '87% success rate',
      trend: 'up'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      service: 'Passport Renewal',
      location: 'Dhaka Passport Office, Agargaon',
      time: '10:30 AM',
      date: 'Today',
      status: 'active',
      token: 'P-245',
      queue: '5 people ahead',
      estimated: '25 min',
      progress: 60
    },
    {
      id: 2,
      service: 'Bank Account Opening',
      location: 'Sonali Bank Ltd, Dhanmondi',
      time: '2:15 PM',
      date: 'Tomorrow',
      status: 'upcoming',
      token: 'B-178',
      queue: 'Scheduled',
      estimated: '15 min',
      progress: 0
    },
    {
      id: 3,
      service: 'Medical Checkup',
      location: 'Dhaka Medical College Hospital',
      time: '11:00 AM',
      date: 'Dec 15',
      status: 'upcoming',
      token: 'H-089',
      queue: 'Confirmed',
      estimated: '30 min',
      progress: 0
    },
    {
      id: 4,
      service: 'NID Information Update',
      location: 'EC Office, Sher-e-Bangla Nagar',
      time: '9:45 AM',
      date: 'Dec 10',
      status: 'completed',
      token: 'N-156',
      queue: 'Completed',
      estimated: '20 min',
      progress: 100
    }
  ]

  const quickServices = [
    {
      name: 'Passport',
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      available: true,
      path: '/passportSerial'
    },
    {
      name: 'Bank',
      icon: CreditCard,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      available: true,
      path: '/bankSerial'
    },
    {
      name: 'Hospital',
      icon: Stethoscope,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      available: true,
      path: '/HospitalAppointment'
    },
    {
      name: 'NID',
      icon: Smartphone,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      available: true,
      path: '/services'
    }
  ]

  const emergencyContacts = [
    {
      name: 'Passport Office',
      number: '09666777777',
      type: 'Helpline'
    },
    {
      name: 'Emergency Police',
      number: '999',
      type: 'Emergency'
    },
    {
      name: 'Hospital Emergency',
      number: '10666',
      type: 'Medical'
    }
  ]

  useEffect(() => {
    // Simulate fetching notifications
    setNotifications([
      { 
        id: 1, 
        message: 'Your passport token P-245 is ready for service', 
        time: '5 min ago', 
        read: false,
        type: 'success'
      },
      { 
        id: 2, 
        message: 'Bank appointment confirmed for tomorrow 2:15 PM', 
        time: '1 hour ago', 
        read: true,
        type: 'info'
      },
      { 
        id: 3, 
        message: 'New hospital services available in your area', 
        time: '2 hours ago', 
        read: true,
        type: 'update'
      },
      { 
        id: 4, 
        message: 'Reminder: NID update appointment in 2 days', 
        time: '3 hours ago', 
        read: true,
        type: 'reminder'
      }
    ])
  }, [])

  const handleLogout = () => {
    logout()
    // Redirect will be handled by AuthContext
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center ml-4 lg:ml-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">BD QueueFree</span>
              </div>
            </div>

            {/* Center - Current Time */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Current Time</div>
                <div className="text-lg font-mono font-bold text-gray-800">{currentTime}</div>
              </div>
            </div>

            {/* Right side - Search, notifications, profile */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, tokens..."
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors relative group">
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </button>
              </div>

              {/* Profile */}
              <div className="relative">
                <button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-gray-900">{currentUser?.fullName || 'John Doe'}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified User
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-white/90 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-200/50
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200/50 lg:hidden">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">BD QueueFree</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Profile Card in Sidebar */}
          <div className="p-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                  <BadgeCheck className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 truncate">{currentUser?.fullName || 'John Doe'}</h3>
                <p className="text-sm text-gray-600 truncate">{currentUser?.email || 'john.doe@example.com'}</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500 ml-1">5.0</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="mt-6 px-4 space-y-2">
            {[
              { name: 'Dashboard Overview', icon: BarChart3, id: 'overview', badge: null },
              { name: 'My Tokens', icon: FileText, id: 'tokens', badge: '3' },
              { name: 'Appointments', icon: Calendar, id: 'appointments', badge: '2' },
              { name: 'Service History', icon: CheckCircle, id: 'history', badge: '12' },
              { name: 'Quick Booking', icon: Zap, id: 'booking', badge: 'New' },
              { name: 'Profile Settings', icon: Settings, id: 'settings', badge: null }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5 ${
                    activeTab === item.id ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    activeTab === item.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : item.badge === 'New' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Emergency Section */}
            <div className="pt-6 mt-6 border-t border-gray-200/50">
              <h4 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Emergency Contacts
              </h4>
              <div className="space-y-2">
                {emergencyContacts.map((contact, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left hover:bg-red-50 hover:text-red-700 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-red-900">{contact.name}</p>
                        <p className="text-xs text-gray-500 group-hover:text-red-700">{contact.type}</p>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-semibold text-gray-700 group-hover:text-red-800">
                      {contact.number}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors mt-8"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Welcome Section with Quick Stats */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{currentUser?.fullName || 'John'}!</span> 👋
                </h1>
                <p className="text-gray-600 text-lg">
                  Here's your queue management overview for {new Date().toLocaleDateString('en-BD', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2.5">
                  <div className="text-sm text-gray-500">Your Rating</div>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">5.0</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Crown className="w-4 h-4" />
                  <span>Premium</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className={`text-xs flex items-center ${
                      stat.trend === 'up' ? 'text-green-600' : 
                      stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      <TrendingUp className={`w-3 h-3 mr-1 ${
                        stat.trend === 'up' ? 'text-green-600' : 
                        stat.trend === 'down' ? 'text-red-600 rotate-180' : 'text-gray-600 opacity-0'
                      }`} />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-xl shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities & Quick Services */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Activities */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1">
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="bg-gradient-to-r from-white to-gray-50/50 border border-gray-200/50 rounded-xl hover:border-blue-200 hover:shadow-md transition-all p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${
                            activity.status === 'active' ? 'bg-green-100 text-green-600 shadow-sm' :
                            activity.status === 'upcoming' ? 'bg-blue-100 text-blue-600 shadow-sm' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {activity.status === 'active' ? <Clock className="w-5 h-5" /> :
                             activity.status === 'upcoming' ? <Calendar className="w-5 h-5" /> :
                             <CheckCircle className="w-5 h-5" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{activity.service}</h3>
                            <p className="text-sm text-gray-600 flex items-center">
                              <Map className="w-3 h-3 mr-1" />
                              {activity.location}
                            </p>
                            <p className="text-xs text-gray-500">{activity.date} • {activity.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                            {activity.token}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                              <QrCode className="w-4 h-4" />
                              <span>QR</span>
                            </button>
                            <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium">
                              <Share2 className="w-4 h-4" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar for Active Tokens */}
                      {activity.status === 'active' && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>{activity.queue}</span>
                            <span>Est: {activity.estimated}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${activity.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Services</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className={`${service.bgColor} p-5 rounded-xl border-2 border-transparent hover:border-current transition-all transform hover:-translate-y-1 hover:shadow-lg group text-center`}
                    >
                      <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`${service.textColor} font-semibold group-hover:underline`}>
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Notifications & Current Token */}
            <div className="space-y-6">
              {/* Current Token */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Current Token</h2>
                  <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-lg">
                    <Zap className="w-3 h-3" />
                    <span className="text-xs font-semibold">LIVE</span>
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-5xl font-black mb-2 text-white drop-shadow-lg">P-245</div>
                  <p className="text-blue-100 text-lg font-medium">Passport Renewal</p>
                  <p className="text-blue-200 text-sm">Dhaka Passport Office, Agargaon</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3 mb-4">
                  <div className="flex justify-between text-sm text-blue-100 mb-1">
                    <span>Your Turn In</span>
                    <span>≈ 25 minutes</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                    <Download className="w-4 h-4" />
                    <span>Download QR</span>
                  </button>
                  <button className="flex-1 bg-white/20 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 border border-white/30">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {notifications.filter(n => !n.read).length} New
                  </span>
                </div>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-xl border transition-all cursor-pointer hover:shadow-sm ${
                        notification.read 
                          ? 'border-gray-200 bg-gray-50/50' 
                          : 'border-blue-200 bg-blue-50/50 shadow-sm'
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-900 mb-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>e
              </div>

              {/* Emergency Quick Actions */}
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                <h2 className="text-xl font-bold mb-3">Emergency Support</h2>
                <p className="text-red-100 text-sm mb-4">Immediate assistance when you need it</p>
                <div className="space-y-2">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-between">
                    <span>Emergency Cancel</span>
                    <AlertCircle className="w-4 h-4" />
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-between">
                    <span>Reschedule Token</span>
                    <Calendar className="w-4 h-4" />
                  </button>
                  <button className="w-full bg-white text-red-600 hover:bg-red-50 py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}