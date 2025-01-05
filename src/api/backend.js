import axios from "axios";
import { fetchConfig } from "../actions/config";

const localConfig = await fetchConfig();
const url = localConfig.backendUrl;

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export const getMetaData = () => axios.get(url + "data/getMetaData", config);
export const getAlgoStacks = () =>
  axios.get(url + "algo/fetchAlgoStacks", config);
export const updateAlgoStacks = (algoStacksData) =>
  axios.post(url + "algo/updateAlgoStacks", { algoStacksData }, config);

export const getStrategies = () =>
  axios.get(url + "strategy/fetchStrategies", config);
export const updateStrategies = (strategiesData) =>
  axios.post(url + "strategy/updateStrategies", { strategiesData }, config);

export const runBacktests = () =>
  axios.get(url + "backtest/runBacktests", config);
export const getBacktests = () =>
  axios.get(url + "backtest/fetchBacktests", config);
export const updateBacktests = (backtestsData) =>
  axios.post(url + "backtest/updateBacktests", { backtestsData }, config);
