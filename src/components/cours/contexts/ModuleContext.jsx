import { createContext, useContext, useState } from "react";
import  { SemestresContextAPI } from "./SemestresContext";

export const ModuleContextAPI = createContext(null); 

const ModuleContext = ({children}) => {
  const {branchSemestre} = useContext(SemestresContextAPI)
	const [module, setModule] = useState(branchSemestre.modules[0]);
	return (
		<ModuleContextAPI.Provider value={{ module, setModule }}>
			{children}
		</ModuleContextAPI.Provider>
	);
};

export default ModuleContext;
