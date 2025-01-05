import { createContext} from "react";

// context for color mode
export const PriceDataContext = createContext({
    priceData: {price: 1000},
    setPriceData: () => {},
    priceMetaData: [{id:0, name: "test", start_date:"19991201",end_date:"20010601",type:"Stock"}],
    setPriceMetaData: () => {},
  });
  