import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['deposit', 'withdrawal', 'stake', 'swap', 'reward'], required: true },
  amount: Number,
  coin: String,
  toCoin: String, // optional (for swap)
  txHash: String, // blockchain reference
  status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
