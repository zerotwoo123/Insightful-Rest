import { Children, createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  const [result, setResult] = useState({
    "prediction": [
      {
        "class": "Moderate",
        "score": 0.22
      },
      {
        "class": "Not Stressed",
        "score": 0.04
      },
      {
        "class": "Severe",
        "score": 0.22
      },
      {
        "class": "Stressed",
        "score": 0.01
      },
      {
        "class": "Very Severe",
        "score": 0.51
      }
    ]
  })

  return <GlobalContext.Provider value={{result, setResult}}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider;