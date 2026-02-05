"use client";

import { useState } from "react";
import FormDetails from "./component/form";
import getTxDetails from "./lifi/page";
import { TxFormData } from "./types/form";

export default function Home() {
  const [formData, setFormData] = useState<TxFormData>({
    fromChain: "",
    toChain: "",
    fromToken: "",
    toToken: "",
    fromAmount: "",
  });

  return (
    <div className="bg-white text-black flex flex-col gap-4 p-10">
      <FormDetails formData={formData} setFormData={setFormData} />

      <button
        onClick={() => getTxDetails(formData)}
        className="bg-gray-600 p-3 rounded-xl cursor-pointer text-white"
      >
        Get detail
      </button>
    </div>
  );
}
