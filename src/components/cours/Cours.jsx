import { MIP_S_UN_DATA } from "./branches/MIP/data/mip_s_un";
import Aside from "./components/AsideTemplate";
import MainTemplate from "./components/MainTemplate";

import { COURS_DATA } from "./data";

const Cours = () => {
	return (
		<section className="p-0">
			<div className="contain flex">
				<Aside branchData={COURS_DATA} />
				<MainTemplate semestreData={MIP_S_UN_DATA} />
			</div>
		</section>
	);
};

export default Cours;
