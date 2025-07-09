const walletSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  walletAddress: String,
  network: String
});
// Avoid model overwrite in development
const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", WalletSchema);
export default Wallet;

