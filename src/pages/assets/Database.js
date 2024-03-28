import {createContext, useState} from "react";
export  const DataBaseContext = createContext ();
export const DataBaseInform = ({children}) =>{
  const [constForm, setConstForm] = useState ([]);
  return (
    <DataBaseContext.Provider value={{constForm, setConstForm}}>
{children}
    </DataBaseContext.Provider>
  )
}