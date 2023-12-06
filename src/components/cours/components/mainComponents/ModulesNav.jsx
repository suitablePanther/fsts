import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModuleContext, VideoContext } from "../../Cours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const ModulesNav = ({ semestre }) => {
	const [isShow, setIsShow] = useState(true);
	const { setIframeSrc } = useContext(VideoContext);
	const { setModule } = useContext(ModuleContext);
	// checking if the screen is greater than px
	useEffect(() => {
		const isShowTime = setInterval(() => {
			if ((window.innerWidth >= 640) & !isShow) {
				// if so
				setIsShow(true);
				return;
			}
		}, 1000);
		return () => clearInterval(isShowTime);
	}, [isShow]);
	///
	const handleClick = (id) => {
		const module = _.find(semestre, { id });
		setModule(module);
		setIframeSrc(module.playList.videos[0].iframe);
		return;
	};
	return (
		<nav
			className=" flex flex-col sm:sticky absolute top-0 h-screen bg-bgDark left-0 
		  gap-4 text-sm font-semibold py-24 border-r-2 border-stone-700/50"
		>
			<span
				className={
					isShow
						? "relative -bottom-[75vh] sm:hidden w-8 text-2xl self-end -right-5 bg-stone-500/50 text-center rounded-full"
						: "absolute left-full bottom-[3vh] sm:hidden w-8 text-2xl self-end bg-stone-500/50 text-center rounded-full"
				}
				onClick={() => setIsShow(!isShow)}
			>
				<FontAwesomeIcon
					icon={isShow ? faAngleDoubleLeft : faAngleDoubleRight}
				/>
			</span>
			{semestre.map((module) => {
				const { id, moduleName } = module;
				return (
					isShow && (
						<NavLink
							key={id}
							className="block text-center hover:text-main w-[200px] hover:border-gray-200/50 py-3 rounded-md mx-1"
							onClick={() => handleClick(id)}
						>
							{moduleName}
						</NavLink>
					)
				);
			})}
		</nav>
	);
};

export default ModulesNav;
