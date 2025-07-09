"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  CreditCard,
  AlertTriangle,
  DollarSign,
  Activity,
  UserPlus,
  List,
  Shield,
  BarChart3,
} from "lucide-react";
import { LogoutButton } from "@/components/Logout-button/logout-button";
import Link from "next/link";

const stats = [
  {
    title: "Total Customers",
    value: "12,345",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Active Accounts",
    value: "9,876",
    change: "+8%",
    icon: CreditCard,
    color: "text-green-600",
  },
  {
    title: "Total Volume",
    value: "$2.4M",
    change: "+23%",
    icon: DollarSign,
    color: "text-purple-600",
  },
  {
    title: "Pending KYC",
    value: "156",
    change: "-5%",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
];

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "Account Created",
    time: "2 minutes ago",
    status: "success",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "KYC Approved",
    time: "5 minutes ago",
    status: "success",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Large Transaction",
    time: "10 minutes ago",
    status: "warning",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    action: "KYC Rejected",
    time: "15 minutes ago",
    status: "error",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    user: "David Chen",
    action: "Password Reset",
    time: "20 minutes ago",
    status: "info",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

const kycQueue = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex@example.com",
    submitted: "2 hours ago",
    status: "pending",
    documents: 3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria@example.com",
    submitted: "4 hours ago",
    status: "review",
    documents: 2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "David Chen",
    email: "david@example.com",
    submitted: "6 hours ago",
    status: "pending",
    documents: 3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function AdminDashboard({ recentCustomers = [] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Top Navigation */}
        <div className="w-full px-4 py-4 flex items-center justify-between mb-5">
          <div>
            <p className="text-blue-600 text-xs mb-1">Admin Panel</p>
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
          </div>
          <LogoutButton />
        </div>

        {/* Welcome */}
        <div className="mb-8 mt-4">
          <p className="text-gray-400 text-sm mt-1">
            Manage users, monitor activity, and review KYC for your platform.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Stats + Actions) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start"
                  >
                    <div className={`mb-2 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold">{stat.title}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div
                      className={`text-xs mt-1 ${
                        stat.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                <Link className="" href="/admin/savings">
                  <Button variant="outline" className="h-20 flex-col gap-2 w-full">
                    <UserPlus className="w-6 h-6" />
                    <span className="text-sm">Add Customer</span>
                  </Button>
                </Link>
                <Link className="" href="/admin/customers">
                  <Button variant="outline" className="h-20 flex-col gap-2 w-full">
                    <List className="w-6 h-6" />
                    <span className="text-sm">Customer List</span>
                  </Button>
                </Link>
                <Link className="hidden" href="/admin/kyc">
                  <Button variant="outline" className="h-20 flex-col gap-2 w-full">
                    <Shield className="w-6 h-6" />
                    <span className="text-sm">Review KYC</span>
                  </Button>
                </Link>
                <Link className="" href="/admin/walletreview">
                  <Button variant="outline" className="h-20 flex-col gap-2 w-full">
                    <Shield className="w-6 h-6" />
                    <span className="text-sm">WalletConnect Review</span>
                  </Button>
                </Link>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span className="text-sm">Analytics</span>
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="hidden bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent"
                  >
                    <Avatar>
                      <AvatarImage src={item.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {item.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.user}</p>
                      <p className="text-xs text-muted-foreground">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          item.status === "success"
                            ? "default"
                            : item.status === "warning"
                            ? "secondary"
                            : item.status === "error"
                            ? "destructive"
                            : "outline"
                        }
                        className="text-xs capitalize"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Recent Customers + KYC Queue) */}
          <div className="hidden space-y-6">
            {/* Recent Customers */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Recent Customers</h2>
              <div className="space-y-4">
                {recentCustomers.map((customer) => (
                  <div
                    key={customer._id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent"
                  >
                    <Avatar>
                      <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {customer.username
                          ? customer.username
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                          : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{customer.username}</p>
                      <p className="text-xs text-muted-foreground">{customer.email}</p>
                      <p className="text-xs text-muted-foreground">
                        Joined {customer.joinDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={customer.type === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {customer.type}
                      </Badge>
                      <p className="text-xs font-medium mt-1">{customer.balance}</p>
                    </div>
                  </div>
                ))}
                <Link href="/admin/customers">
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Customers
                  </Button>
                </Link>
              </div>
            </div>

            {/* KYC Queue */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">KYC Review Queue</h2>
              <div className="space-y-4">
                {kycQueue.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={item.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.documents} docs • {item.submitted}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={item.status === "pending" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Link href="/admin/kyc">
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Pending
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}