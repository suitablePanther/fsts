import { sUnModulesData } from "./branches/MIP/semestres/s_un/s_un_modules_data";
import Aside from "./components/AsideTemplate";
import MainTemplate from "./components/MainTemplate";
const Learning = () => {
	return (
		<section className="p-0">
			<div className="contain flex">
				<Aside />
				<MainTemplate semestreData={sUnModulesData} />
			</div>
		</section>
	);
};

export default Learning;
