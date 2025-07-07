// models/UserAsset.js
import mongoose from "mongoose";

const UserAssetSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    coin: { type: String, required: true },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const UserAsset = mongoose.models.UserAsset || mongoose.model("UserAsset", UserAssetSchema);
export default UserAsset;
