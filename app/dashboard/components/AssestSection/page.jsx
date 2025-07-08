// app/dashboard/page.jsx (or similar)
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getUserAssets } from "@/lib/actions/getUserAssets";
import User from "@/models/User";
import AssetSection from "@/components/AssetSection";

export default async function DashPage() {
  const session = await getServerSession(authOptions);
  // Ensure the DB is connected and user is found
  const user = await User.findOne({ email: session?.user?.email });
  const assets = await getUserAssets(user?._id);
    console.log("💾 Assets fetched from server:", assets);


  return (
    <div className="py-6">
      <AssetSection assets={assets} />
    </div>
  );
}
