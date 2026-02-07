import axios from "axios";
import { TxFormData } from "../types/form";

const getTxDetails = async (formData: TxFormData) => {
  const { fromChain, toChain, fromToken, toToken, fromAmount } = formData;

  const fromAddress = "0xB3d545a856cAF3d01e5f3A85371b59180668219B";

  const result = await axios.get("https://li.quest/v1/quote", {
    params: {
      fromChain: Number(fromChain),
      toChain: Number(toChain),
      fromToken,
      toToken,
      fromAmount,
      fromAddress,
    },
  });

  console.log(result.data);
  return result.data;
};

export default getTxDetails;
