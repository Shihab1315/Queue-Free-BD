// app/component/DashboardContent.jsx
'use client'

import { useState } from 'react'
import { 
  Users, Clock, Calendar, CheckCircle, QrCode, 
  Download, Bell, Search, User, Settings, LogOut,
  BarChart3, FileText, Menu, X
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardContent({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // আপনার পূর্বের ড্যাশবোর্ড কন্টেন্ট এখানে পেস্ট করুন
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ড্যাশবোর্ড UI */}
      <h1>Welcome, {user?.name}</h1>
      {/* বাকি ড্যাশবোর্ড কন্টেন্ট */}
    </div>
  )
}