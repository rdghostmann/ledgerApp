import User from "@/models/User"
import UserAsset from "@/models/UserAsset"
import { connectToDB } from "@/lib/connectDB"

export async function getUsersWithAssets(search = "") {
  await connectToDB()
  const query = search
    ? {
      $or: [
        { username: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    }
    : {}

  const users = await User.find(query)
    .populate("assets")
    .lean()

  return users.map(user => ({
    id: user._id.toString(),
    name: user.username,
    email: user.email,
    avatar: user.avatar,
    assets: user.assets.reduce((acc, asset) => {
      acc[asset.coin] = asset.amount
      return acc
    }, {}),
    lastActive: user.lastLogin ? user.lastLogin.toISOString().slice(0, 10) : "",
  }))
}

export async function updateUserAssets(userId, assets) {
  await connectToDB()



  if (!assets || typeof assets !== "object") {
    throw new Error("Invalid assets data")
  }

  const user = await User.findById(userId).populate("assets")
  if (!user) throw new Error("User not found")

  for (const [coin, amount] of Object.entries(assets)) {

    let asset = user.assets.find(a => a.coin === coin)
    if (asset) {
      asset.amount = amount
      await asset.save()
    } else {
      const newAsset = await UserAsset.create({
        coin,
        network: "mainnet",
        amount,
        user: user._id,
      })
      user.assets.push(newAsset._id)
    }
  }

  await user.save()
  return true
}

