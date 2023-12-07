import { createContext, useState } from "react";
import { MIP_S_UN_DATA } from "./branches/MIP/data/mip_s_un";
import Aside from "./components/SemestresNav";
import MainTemplate from "./components/MainTemplate";

import { COURS_DATA } from "./data";
import ModulesNav from "./components/mainComponents/ModulesNav";

export const ModuleContext = createContext(null); //
export const SemestresContext = createContext(null);
export const VideoContext = createContext(null);

const Cours = () => {
	const [branchSemestre, setBranchSemestre] = useState(MIP_S_UN_DATA);
	const [module, setModule] = useState(branchSemestre.modules[0]);
	const [iframeSrc, setIframeSrc] = useState(module.playList.videos[0].iframe);
	const { modules } = branchSemestre;
	return (
		<section className="p-0">
			<div className="contain flex relative ">
				<ModuleContext.Provider value={{ module, setModule }}>
					<VideoContext.Provider value={{ iframeSrc, setIframeSrc }}>
						<SemestresContext.Provider value={setBranchSemestre}>
							<ModulesNav semestre={modules} />
							<MainTemplate semestreData={branchSemestre} />
						</SemestresContext.Provider>
					</VideoContext.Provider>
				</ModuleContext.Provider>
			</div>
		</section>
	);
};

export default Cours;
