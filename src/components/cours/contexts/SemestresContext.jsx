import { createContext, useState } from "react";
import { MIP_S_UN_DATA } from "../branches/MIP/data/mip_s_un";

export const SemestresContextAPI = createContext(null);

const SemestresContext = ({ children }) => {
	const [branchSemestre, setBranchSemestre] = useState(MIP_S_UN_DATA);
  
  return (
    <SemestresContextAPI.Provider value={{branchSemestre,setBranchSemestre}}>
      {children}
    </SemestresContextAPI.Provider>
  )
}

export default SemestresContext