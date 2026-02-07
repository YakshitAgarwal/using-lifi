import axios from "axios";

const getTokens = async () => {
  const res = await axios.get("https://li.quest/v1/gas/prices/10");
  console.log(res.data);
};

export default getTokens;
