import NavHeader from "../components/NavHeader/NavHeader";

export default function FourZeroOnePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <NavHeader />

      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h1 className="text-2xl font-bold mb-2 text-blue-900">401(k) Retirement Account</h1>
        <p className="text-gray-600 mb-6">
          Your 401(k) is a retirement savings plan sponsored by your employer. It lets you save and invest a portion of your paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from the account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Summary */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Account Summary</h2>
            <ul className="text-gray-700 space-y-1">
              <li>
                <span className="font-medium">Current Balance:</span> $24,500.00
              </li>
              <li>
                <span className="font-medium">Year-to-Date Contributions:</span> $3,000.00
              </li>
              <li>
                <span className="font-medium">Employer Match:</span> $1,500.00
              </li>
              <li>
                <span className="font-medium">Vesting:</span> 80%
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
            <ul className="text-gray-700 space-y-1">
              <li>06/28/2025 - Contribution: +$250.00</li>
              <li>06/14/2025 - Employer Match: +$125.00</li>
              <li>05/31/2025 - Contribution: +$250.00</li>
              <li>05/15/2025 - Investment Gain: +$320.00</li>
            </ul>
          </div>
        </div>

        {/* Investment Allocation */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Investment Allocation</h2>
          <div className="w-full bg-gray-100 rounded h-6 flex overflow-hidden mb-2">
            <div className="bg-blue-500 h-6" style={{ width: "50%" }} title="US Stocks"></div>
            <div className="bg-green-500 h-6" style={{ width: "30%" }} title="International Stocks"></div>
            <div className="bg-yellow-500 h-6" style={{ width: "15%" }} title="Bonds"></div>
            <div className="bg-gray-400 h-6" style={{ width: "5%" }} title="Cash"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>US Stocks (50%)</span>
            <span>International (30%)</span>
            <span>Bonds (15%)</span>
            <span>Cash (5%)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Make a Contribution
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Adjust Investments
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
            View Statements
          </button>
        </div>
      </div>
    </div>
  );
}