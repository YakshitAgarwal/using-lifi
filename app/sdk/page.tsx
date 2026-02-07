"use client";

import { createConfig } from "@lifi/sdk";
import { getRoutes, executeRoute } from "@lifi/sdk";

createConfig({
  integrator: "UniPay",
});

// type RoutesRequest = {
//   fromChainId: number;
//   toChainId: number;
//   fromTokenAddress: string;
//   toTokenAddress: string;
//   fromAmount: string;
// };

const SDK = () => {
  const fetchRoute = async () => {
    const result = await getRoutes({
      fromChainId: 8453,
      toChainId: 137,
      fromTokenAddress: "ETH",
      toTokenAddress: "USDT",
      fromAmount: "100000000000000",
      fromAddress: "",
    });

    const route = result.routes[0];

    await executeRoute(route, {
      updateRouteHook(route) {
        console.log(route);
      },
    });
  };

  return (
    <div className="min-h-screen">
      <button
        onClick={() => fetchRoute()}
        className="text-black text-2xl bg-gray-600 rounded-2xl"
      >
        Get route
      </button>
    </div>
  );
};

export default SDK;
