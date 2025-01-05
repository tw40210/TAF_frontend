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
