import { NavLink } from "react-router-dom";
import _ from "lodash";
import { useContext } from "react";
import { SemestresContext, VideoContext } from "../Cours";
import { ModuleContext } from "../Cours";

const Aside = ({ branchData }) => {
	const setBranchSemestre = useContext(SemestresContext);
	const { setModule } = useContext(ModuleContext);
	const { setIframeSrc } = useContext(VideoContext);
	const handleShowHide = (id) => {
		const parent = _.find(branchData, { id });
		return (parent.isShow = !parent.isShow);
	};
	return (
		<aside
			className="fixed bottom-0 flex z-20 justify-evenly w-screen md:sticky md:top-0 md:basis-1/3 md:h-screen md:justify-start md:pt-32 md:gap-2 
	  md:flex-col md:max-w-[200px] md:z-0 md: bg-transparent md:bg-stone-800"
		>
			{branchData.map((branch) => {
				const { id, name, semesters, isShow } = branch;
				const handleClick = (id) => {
					const parent = _.find(semesters, { id });
					console.log(parent);
					setBranchSemestre(parent);
					setModule(parent.modules[0]);
					setIframeSrc(parent.modules[0].playList.videos[0].iframe);
					return;
				};
				return (
					<div key={id} className="group flex flex-col-reverse md:flex-col">
						<NavLink
							className="text-center py-1 bg-stone-800 w-[33vw] md:w-full group-gr relative 
						 md:py-[1px] block font-semibold"
							onClick={() => handleShowHide(id)}
						>
							<span className=" absolute right-2 top-1/2 -translate-y-1/2 content-[url('/svgs/up.svg')]  w-5 rotate-180"></span>
							{name}
						</NavLink>
						{isShow && (
							<div
								id="semestre"
								className=" bg-stone-800 flex flex-col overflow-hidden pt-0.5 gap-1 text-center text-sm"
							>
								{/* semesters map  */}
								{semesters.map((semestre) => {
									const { id, name, path } = semestre;
									return (
										<NavLink
											onClick={() => handleClick(id)}
											key={id}
											to={path}
											className="aria-[current='page']:text-main font-semibold 
											capitalize pt-1 m-auto hover:text-main w-full duration-200"
										>
											{name}
										</NavLink>
									);
								})}
								{/* semestres map  */}
							</div>
						)}
					</div>
				);
			})}
		</aside>
	);
};

export default Aside;
