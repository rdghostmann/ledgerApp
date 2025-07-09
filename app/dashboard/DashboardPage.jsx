import ActionButtons from "./components/ActionButtons/ActionButtons";
import CoinGeckoWidget from "./components/CoinGeckoWidget/CoinGeckoWidget";
import NavHeader from "./components/NavHeader/NavHeader";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import AssetSection from "./components/AssestSection/AssetsSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import User from "@/models/User";
import { connectToDB } from "@/lib/connectDB";

export default async function DashboardPage() {
  // Get user session
  const session = await getServerSession(authOptions);
  let username = "User";

  if (session?.user?.email) {
    await connectToDB();
    const user = await User.findOne({ email: session.user.email });
    console.log("Username:", user)
    if (user?.username) {
      username = user.username;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Top Navigation */}
        <NavHeader username={username} />

        {/* Welcome */}
        <div className="mb-8 mt-4">
          <p className="text-gray-400 text-sm mt-1">
            Manage your assets, monitor the market, and take control of your finances.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Cards + Assets) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <CardCarousel />
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Your Assets</h2>
              <AssetSection />
            </div>
          </div>

          {/* Right Column (Actions + Widget) */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
              <ActionButtons />
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Market Overview</h2>
              <CoinGeckoWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}