import { v4 as uuidv4 } from 'uuid';

const request = async (
  endPoint: string = "",
  params: Params = { method: "GET" },
  url = process.env.REACT_APP_TWNTY_API
) => {
  try {
    const response = await fetch(`${url}${endPoint}`, params);
    const data = await response.json();
    const solarModules = [];
    
    for (const solarModule in data) {
      const solarModuleObject: StoreItem = {
        productId: uuidv4(),
        name: solarModule,
        price: data[solarModule].price,
        maxAmount: data[solarModule].quantity,
        available: data[solarModule].quantity,
      };

      solarModules.push(solarModuleObject);
    }

    if (!response.ok) {
      throw new Error(`Error with status ${response.status}`);
    }

    return solarModules;
  } catch (error) {
    console.log(error);
  }
};

export const API = {
  getSolarModules: () => request(),
};
