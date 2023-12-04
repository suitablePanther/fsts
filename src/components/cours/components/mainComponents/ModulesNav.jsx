import _ from "lodash";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModuleContext } from "../../Cours";

const ModulesNav = ({ semestre }) => {
	const { setModule } = useContext(ModuleContext);
	const handleClick = (id) => {
		const module = _.find(semestre, { id });
		setModule(module);
		return;
	};
	return (
		<nav className="flex w-full text-sm font-semibold flex-wrap sm:gap-2 ">
			{semestre.map((module) => {
				const { id, moduleName } = module;
				return (
					<NavLink
						key={id}
						className="block py-1 text-center hover:text-main flex-grow"
						onClick={() => handleClick(id)}
					>
						{moduleName}
					</NavLink>
				);
			})}
		</nav>
	);
};

export default ModulesNav;
