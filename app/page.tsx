"use client";

import { useState } from "react";
import FormDetails from "./component/form";
import getTxDetails from "./component/quote";
import { TxFormData } from "./types/form";
import getTokens from "./component/tokens";

export default function Home() {
  const [formData, setFormData] = useState<TxFormData>({
    fromChain: "",
    toChain: "",
    fromToken: "",
    toToken: "",
    fromAmount: "",
  });

  return (
    <div>
      <div className="bg-white text-black flex flex-col gap-4 p-10">
        <FormDetails formData={formData} setFormData={setFormData} />

        <button
          onClick={() => getTxDetails(formData)}
          className="bg-gray-600 p-3 rounded-xl cursor-pointer text-white"
        >
          Get detail
        </button>
        <button
          onClick={() => getTokens()}
          className="bg-gray-600 p-3 rounded-xl cursor-pointer text-white"
        >
          Get tokens
        </button>
      </div>
    </div>
  );
}
