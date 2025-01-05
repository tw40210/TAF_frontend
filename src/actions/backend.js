import {
  getMetaData,
} from "../api/backend";

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
