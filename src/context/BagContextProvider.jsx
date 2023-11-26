import { createContext, useEffect, useState } from "react";
import { getBagDatabase } from "../services/bags-database-service";

export { createContext } from "react";

export const BagsContext = createContext(null);

const BagContextProvider = ({ children }) => {
  const [bags, setBags] = useState([]);
  useEffect(() => {
    getBagDatabase()
      .then((bags) => setBags(bags))
      .catch((e) => console.log(e));
  }, []);
  return (
    <BagsContext.Provider value={{ bags }}>{children}</BagsContext.Provider>
  );
};

export default BagContextProvider;
