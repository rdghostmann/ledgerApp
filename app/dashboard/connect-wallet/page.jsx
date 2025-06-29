import NavHeader from "../components/NavHeader/NavHeader";
import ConnectWallet from "./ConnectWallet";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-8">
    <NavHeader />
    <ConnectWallet />
    </div>
  );
}

