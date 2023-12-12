import { useContext } from "react";
import MainTemplate from "./components/MainTemplate";
import ModulesNav from "./components/mainComponents/ModulesNav";

import { SemestresContextAPI } from "./contexts/SemestresContext";

const Cours = () => {
	const { branchSemestre } = useContext(SemestresContextAPI);
	const { modules } = branchSemestre;
	return (
		<section className="p-0">
			<div className="contain flex relative ">
				<ModulesNav semestre={modules} />
				<MainTemplate />
			</div>
		</section>
	);
};

export default Cours;
