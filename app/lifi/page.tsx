import axios from "axios";

const getTxDetails = async () => {
  const getQuote = async (
    fromChain: number,
    toChain: number,
    fromToken: string,
    toToken: string,
    fromAmount: string,
    fromAddress: string,
  ) => {
    const result = await axios.get("https://li.quest/v1/quote", {
      params: {
        fromChain,
        toChain,
        fromToken,
        toToken,
        fromAmount,
        fromAddress,
      },
    });
    return result.data;
  };

  const fromChain = 1;
  const fromToken = "USDC";
  const toChain = 10;
  const toToken = "USDC";
  const fromAmount = "1000000";
  const fromAddress = "0xB3d545a856cAF3d01e5f3A85371b59180668219B";

  const quote = await getQuote(
    fromChain,
    toChain,
    fromToken,
    toToken,
    fromAmount,
    fromAddress,
  );

  console.log(quote);
};

export default getTxDetails;
