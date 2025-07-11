import NavHeader from "../components/NavHeader/NavHeader";

export default function FourZeroOnePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4 pb-12">
      <NavHeader />

      <div className="max-w-5xl mx-auto mt-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">401(k) Retirement Account</h1>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Your 401(k) is a retirement savings plan sponsored by your employer. It lets you save and invest a portion of
          your paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from the account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Summary */}
          <div className="bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">Account Summary</h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><span className="font-medium text-white">Current Balance:</span> $24,500.00</li>
              <li><span className="font-medium text-white">Year-to-Date Contributions:</span> $3,000.00</li>
              <li><span className="font-medium text-white">Employer Match:</span> $1,500.00</li>
              <li><span className="font-medium text-white">Vesting:</span> 80%</li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">Recent Activity</h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>06/28/2025 - Contribution: +$250.00</li>
              <li>06/14/2025 - Employer Match: +$125.00</li>
              <li>05/31/2025 - Contribution: +$250.00</li>
              <li>05/15/2025 - Investment Gain: +$320.00</li>
            </ul>
          </div>
        </div>

        {/* Investment Allocation */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Investment Allocation</h2>
          <div className="w-full bg-slate-700 rounded overflow-hidden h-6 flex">
            <div className="bg-blue-500 h-6" style={{ width: "50%" }} title="US Stocks" />
            <div className="bg-green-500 h-6" style={{ width: "30%" }} title="International Stocks" />
            <div className="bg-yellow-400 h-6" style={{ width: "15%" }} title="Bonds" />
            <div className="bg-gray-400 h-6" style={{ width: "5%" }} title="Cash" />
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-slate-400 mt-2">
            <span>US Stocks (50%)</span>
            <span>International (30%)</span>
            <span>Bonds (15%)</span>
            <span>Cash (5%)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg shadow hover:from-blue-500 hover:to-blue-700 transition">
            Make a Contribution
          </button>
          <button className="bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg shadow hover:from-green-500 hover:to-green-700 transition">
            Adjust Investments
          </button>
          <button className="bg-slate-700 text-slate-300 px-5 py-2 rounded-lg hover:bg-slate-600 transition">
            View Statements
          </button>
        </div>
      </div>
    </div>
  );
}
