import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  coin: { type: String, required: true }, // coin used for contribution
  date: { type: Date, default: Date.now },
  source: { type: String, default: "main_balance" }, // where the funds came from
  status: { type: String, enum: ["pending", "confirmed", "failed"], default: "confirmed" },
});

export default mongoose.models._401kContribution || mongoose.model("401kContribution", contributionSchema);