import ActionButtons from "./components/ActionButtons/ActionButtons";
import CoinGeckoWidget from "./components/CoinGeckoWidget/CoinGeckoWidget";
import NavHeader from "./components/NavHeader/NavHeader";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import AssetSection from "./components/AssestSection/AssetsSection";
import getUserAssets from "@/controllers/getUserAssets";

export default async function DashboardPage() {
  // ✅ Move this inside the component function
  const userAssets = await getUserAssets();

  return (
    <div className="min-h-screen bg-gray-100 pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Nav Header */}
        <NavHeader />

        {/* Credit Card */}
        <CardCarousel />

        {/* Action Buttons */}
        <ActionButtons />

        {/* Assets Section (pass as prop if needed) */}
        <AssetSection userAssets={userAssets} />

        {/* Market Widget */}
        <CoinGeckoWidget />
      </div>
    </div>
  );
}
