import { createContext, useContext } from "react";

interface Props {
  children: JSX.Element;
}

const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }: Props) => {
  const values = {};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
