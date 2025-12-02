import TradingViewWidget from "../tradingview-widget";

export default function MarketTickers() {
  const symbols = [
    { symbol: "BSE:SENSEX", title: "SENSEX" },
    { symbol: "FX_IDC:XAUINRG", title: "Gold (INR)" },
    { symbol: "FX_IDC:XAGINRG", title: "Silver (INR)" }
  ];

  return (
    <section className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {symbols.map((item) => (
            <div key={item.symbol} className="w-full aspect-[2/1]">
              <TradingViewWidget symbol={item.symbol} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
