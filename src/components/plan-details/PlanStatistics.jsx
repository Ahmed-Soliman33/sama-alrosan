const PlanStatistics = ({ plan }) => {
  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const statistics = [
    {
      value: plan?.total_units?.toString() || "0",
      label: "عدد القطع التجارية",
      className: "bg-[#D4AF37]",
    },
    {
      value: plan?.residential_units?.toString() || "0",
      label: "عدد القطع السكنية",
      className: "bg-[#2C3E50]",
    },
    {
      value: formatNumber(plan?.total_area || 0),
      label: "المساحة الإجمالية",
      unit: "متر مربع",
      className: "bg-[#2C3E50] col-span-2",
    },
  ];

  return (
    <div className="relative mx-auto grid w-full grid-cols-2 px-2 pt-12 pb-8 md:px-4 md:pt-20 md:pb-14 lg:max-w-5xl lg:px-24 2xl:max-w-6xl">
      {statistics.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 rounded-lg p-4 text-center text-white ${stat.className} `}
        >
          <div className="mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {stat.value}
          </div>
          <div className="text-sm font-medium sm:text-base lg:text-lg">
            {stat.label}
            {stat.unit && (
              <div className="mt-1 text-xs opacity-90 sm:text-sm">
                {stat.unit}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanStatistics;
