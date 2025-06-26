import React, { useEffect } from 'react';

const CoinGeckoWidget = () => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script once on mount
    if (!document.getElementById('gecko-coin-list-widget')) {
      const script = document.createElement('script');
      script.id = 'gecko-coin-list-widget';
      script.src = 'https://widgets.coingecko.com/gecko-coin-list-widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Live Crypto Prices</h2>
      {/* CoinGecko Coin List Widget */}
      <gecko-coin-list-widget
        locale="en"
        outlined="true"
        coin-ids="bitcoin,stellar,donald-trump,solana,ripple,algorand,cardano,ethereum,litecoin"
        initial-currency="usd"
        style={{ width: '100%' }}
      ></gecko-coin-list-widget>
      <div className="text-xs text-gray-400 mt-2">
        Powered by <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="underline">CoinGecko</a>
      </div>
    </div>
  );
};

export default CoinGeckoWidget;