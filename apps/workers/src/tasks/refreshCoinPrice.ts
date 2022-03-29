import to from "await-to-js";
import axios from "axios";
import { Task } from "graphile-worker";

const refreshCoinPrice: Task = async (payload: any, helpers) => {
  const [error, result] = await to(
    axios.get("https://api.coingecko.com/api/v3/coins/cosmos")
  );

  if (error) {
    helpers.logger.error(JSON.stringify(error));
  }

  const { data } = result || {};

  helpers.logger.info(JSON.stringify(data));
};

export default refreshCoinPrice;
