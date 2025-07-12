import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  coin: { type: String, required: true },
  date: { type: Date, default: Date.now },
  source: { type: String, default: "main_balance" },
  status: { type: String, enum: ["pending", "confirmed", "failed"], default: "confirmed" },
});

// ✅ Ensure consistent model name
export default mongoose.models["401kContribution"] || mongoose.model("401kContribution", contributionSchema);
