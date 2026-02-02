"use client";

import FormDetails from "./component/form";
import getTxDetails from "./lifi/page";

export default function Home() {
  return (
    <div className="bg-white text-black flex flex-col gap-4 p-10">
      <div>
        <FormDetails />
      </div>
      <div>
        <button
          onClick={() => getTxDetails()}
          className="bg-gray-600 p-3 rounded-xl cursor-pointer"
        >
          Get detail
        </button>
      </div>
    </div>
  );
}
