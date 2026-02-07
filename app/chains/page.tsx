"use client";

import axios from "axios";
import { useState } from "react";

type Chain = {
  id: number;
  name: string;
};

const Chains = () => {
  const [chains, setChains] = useState<Chain[]>([]);

  const fetchChains = async () => {
    const res = await axios.get("https://li.quest/v1/chains");
    setChains(res.data.chains);
  };

  return (
    <div className="text-white bg-black min-h-screen p-4">
      <button
        onClick={() => fetchChains()}
        className="border-2 bg-gray-600 p-2 rounded-2xl my-4"
      >
        Get chains
      </button>
      {chains.map((chain) => (
        <div key={chain.id} className="text-2xl flex gap-2">
          <div>{chain.name}</div>
          <div>{chain.id}</div>
        </div>
      ))}
    </div>
  );
};

export default Chains;
