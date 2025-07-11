"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Edit, Plus, Wallet, TrendingUp, Users } from "lucide-react"

const ASSETS = {
  BTC: { name: "Bitcoin", symbol: "BTC", color: "bg-orange-500" },
  ETH: { name: "Ethereum", symbol: "ETH", color: "bg-blue-500" },
  USDT: { name: "Tether", symbol: "USDT", color: "bg-green-500" },
  BNB: { name: "Binance Coin", symbol: "BNB", color: "bg-yellow-500" },
  SOL: { name: "Solana", symbol: "SOL", color: "bg-purple-500" },
  ADA: { name: "Cardano", symbol: "ADA", color: "bg-blue-600" },
  XRP: { name: "Ripple", symbol: "XRP", color: "bg-gray-500" },
  DOGE: { name: "Dogecoin", symbol: "DOGE", color: "bg-yellow-600" },
  TRX: { name: "Tron", symbol: "TRX", color: "bg-red-500" },
  DOT: { name: "Polkadot", symbol: "DOT", color: "bg-pink-500" },
  SHIB: { name: "Shiba Inu", symbol: "SHIB", color: "bg-orange-600" },
}

export default function WalletPage({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [editingAssets, setEditingAssets] = useState({})
  const [loading, setLoading] = useState(false)
  const [livePrices, setLivePrices] = useState({})

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,cardano,ripple,dogecoin,tron,polkadot,shiba-inu&vs_currencies=usd")
        const data = await res.json()
        setLivePrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          USDT: data.tether.usd,
          BNB: data.binancecoin.usd,
          SOL: data.solana.usd,
          ADA: data.cardano.usd,
          XRP: data.ripple.usd,
          DOGE: data.dogecoin.usd,
          TRX: data.tron.usd,
          DOT: data.polkadot.usd,
          SHIB: data["shiba-inu"].usd,
        })
      } catch (error) {
        console.error("Failed to fetch live prices:", error)
      }
    }
    fetchPrices()
  }, [])

  const calculateTotalValue = (assets) => {
    return Object.entries(assets).reduce((total, [symbol, amount]) => {
      return total + amount * (livePrices[symbol] || 0)
    }, 0)
  }

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users
    return users.filter(
      user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [users, searchTerm])

  const totalUsers = filteredUsers.length
  const totalValue = filteredUsers.reduce((sum, user) => sum + calculateTotalValue(user.assets), 0)
  const totalAssets = filteredUsers.reduce((sum, user) => sum + Object.keys(user.assets).length, 0)

  const handleEditUser = (user) => {
    setSelectedUser(user)
    setEditingAssets({ ...user.assets })
  }

  const handleSaveAssets = async () => {
    if (!selectedUser) return
    setLoading(true)
    const res = await fetch("/api/admin/update-assets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: selectedUser.id,
        assets: editingAssets,
      }),
    })
    const result = await res.json()
    if (result.success) {
      setUsers(prev =>
        prev.map(u =>
          u.id === selectedUser.id ? { ...u, assets: { ...editingAssets } } : u
        )
      )
    } else {
      alert("Failed to update assets: " + (result.error || "Unknown error"))
    }
    setSelectedUser(null)
    setEditingAssets({})
    setLoading(false)
  }

  const updateAssetAmount = (symbol, value) => {
    setEditingAssets((prev) => ({
      ...prev,
      [symbol]: Math.max(0, Number.parseFloat(value) || 0),
    }))
  }

  const addNewAsset = (symbol) => {
    if (!editingAssets[symbol]) {
      setEditingAssets((prev) => ({
        ...prev,
        [symbol]: 0,
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Wallet Management</h1>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Total Users</p>
                    <p className="text-2xl font-bold">{totalUsers}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-400">Total Value</p>
                    <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Wallet className="h-8 w-8 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Total Assets</p>
                    <p className="text-2xl font-bold">{totalAssets}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-gray-700">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <Dialog open={selectedUser?.id === user.id} onOpenChange={(open) => !open && setSelectedUser(null)}>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditUser(user)}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Assets - {selectedUser?.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {/* Current Assets */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Current Assets</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {Object.entries(editingAssets).map(([symbol, amount]) => (
                              <div key={symbol} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                                <div
                                  className={`w-8 h-8 rounded-full ${ASSETS[symbol]?.color} flex items-center justify-center text-xs font-bold`}
                                >
                                  {symbol}
                                </div>
                                <div className="flex-1">
                                  <Label className="text-sm">{ASSETS[symbol]?.name}</Label>
                                  <Input
                                    type="number"
                                    step="any"
                                    value={amount}
                                    onChange={(e) => updateAssetAmount(symbol, e.target.value)}
                                    className="mt-1 bg-gray-700 border-gray-600"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Add New Assets */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Add New Assets</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {Object.entries(ASSETS).map(
                              ([symbol, asset]) =>
                                !editingAssets[symbol] && (
                                  <Button
                                    key={symbol}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addNewAsset(symbol)}
                                    className="border-gray-600 hover:bg-gray-700"
                                  >
                                    <Plus className="h-3 w-3 mr-1" />
                                    {symbol}
                                  </Button>
                                ),
                            )}
                          </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                          <Button variant="outline" onClick={() => setSelectedUser(null)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSaveAssets} className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
                            {loading ? "Saving..." : "Save Changes"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Total Value</span>
                    <span className="text-lg font-bold text-green-400">${calculateTotalValue(user.assets).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Last Active</span>
                    <span className="text-sm">{user.lastActive}</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-2">Assets ({Object.keys(user.assets).length})</p>
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(user.assets).map(([symbol, amount]) => (
                        <Badge key={symbol} variant="secondary" className="bg-gray-700 text-white text-xs">
                          {symbol}: {amount.toLocaleString()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No users found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
