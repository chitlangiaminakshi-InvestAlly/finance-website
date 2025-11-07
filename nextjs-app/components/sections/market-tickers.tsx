import { TrendingUp, TrendingDown } from "lucide-react";

export default function MarketTickers() {
  const marketData = [
    {
      label: "NIFTY 50",
      value: "23,450.80",
      change: "+0.52%",
      isPositive: true,
    },
    {
      label: "SENSEX",
      value: "77,120.10",
      change: "-0.27%",
      isPositive: false,
    },
    {
      label: "GOLD",
      value: "₹72,850",
      change: "+0.43%",
      isPositive: true,
    },
  ];

  return (
    <section className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto space-x-8">
          {marketData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-sm font-medium text-slate-600">{item.label}:</span>
              <span className="text-lg font-bold text-slate-900">{item.value}</span>
              <span className={`text-sm flex items-center ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                {item.isPositive ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
