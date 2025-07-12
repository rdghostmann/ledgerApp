import mongoose from "mongoose";

const UserAssetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coin: { type: String, required: true },
    network: { type: String, required: true },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);


export default mongoose.models.UserAsset || mongoose.model("UserAsset", UserAssetSchema);
