import {
  getMetaData,
  getAlgoStacks,
  runBacktests,
  getStrategies,
  getBacktests,
} from "../api/backend";
import { tokens } from "../contexts/theme";

export const fetchMetaData = async (set_func) => {
  try {
    const { data } = await getMetaData();
    const indexed_data = data.MetaDataList.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
    set_func(indexed_data);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAlgoStacks = async (set_func) => {
  try {
    const { data } = await getAlgoStacks();
    set_func(data.AlgoStacks);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchStrategies = async (set_func) => {
  try {
    const { data } = await getStrategies();
    set_func(data.Strategies);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchBacktests = async (set_func) => {
  try {
    const { data } = await getBacktests();
    set_func(data.Backtests);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBacktestsResults = async (set_prices_func, set_stats_func) => {
  try {
    const { data } = await runBacktests();
    console.log(data);
    const handlePrices = () => {
      const tmpBacktestsPrices = {};
      // Reformat for line chart
      for (const btKey in data.Report) {
        const objectTemplate = {
          id: "template",
          color: tokens("dark").greenAccent[500],
          data: [],
        };
        const formattedData = Object.entries(data.Report[btKey].prices).map(
          ([key, value]) => ({
            x: key,
            y: value,
          })
        );
        objectTemplate.id = btKey;
        objectTemplate.data = formattedData;
        tmpBacktestsPrices[btKey] = objectTemplate;
      }
      return tmpBacktestsPrices;
    };

    const handleStats = () => {
      const tmpBacktestsStats = {};

      for (const btKey in data.Report) {
        // Add id column for data table
        data.Report[btKey].stats["id"] = btKey;
        tmpBacktestsStats[btKey] = data.Report[btKey].stats;
      }
      return tmpBacktestsStats;
    };

    const newBacktestsPrices = handlePrices();
    set_prices_func((prev) => ({ ...prev, ...newBacktestsPrices }));

    const newBacktestsStats = handleStats();
    set_stats_func((prev) => ({ ...prev, ...newBacktestsStats }));
  } catch (error) {
    console.log(error.message);
  }
};
