import { Link } from "react-router-dom";
import { COURS_DATA } from "./data";
import { useContext } from "react";
import { SemestresContextAPI } from "./context/SemestresContext";
import _ from "lodash";
import { ModuleContextAPI } from "./context/ModuleContext";
import { VideoContextAPI } from "./context/VideoContext";

const CoursMap = () => {
	// taking data form Contexts
	const { setBranchSemestre } = useContext(SemestresContextAPI);
	const { setModule } = useContext(ModuleContextAPI);
	const { setIframeSrc } = useContext(VideoContextAPI);
	//
	return (
		<section className=" h-screen flex flex-col justify-center self-center">
			<h1>Cours Map</h1>
			<main className=" group/p container flex items-center max-w-[450px] rotate-90 sm:rotate-0">
				<h3
					className=" group-hover/p:text-transparent bg-clip-text
               group-hover/p:bg-gradient-to-l group-hover/p:from-yellow-600 group-hover/p:to-bgDark p-2 rounded-lg border-2 duration-100"
				>
					Deust
				</h3>
				<span className="block h-[1.6px] grow bg-zinc-100 max-w-[105px] -translate-y-1/2"></span>
				<div
					className="relative container flex flex-col items-center gap-5 w-fit 
      before:h-[70.4%] before:absolute before:w-[14px] before:rounded-l
       before:border-zinc-100 before:border-[1.8px] before:border-r-transparent
       before:top-1/2 before:-translate-y-1/2 before:-left-9 "
				>
					{COURS_DATA.map((branch) => {
						const { id, name, semesters } = branch;
						const handleClick = (id) => {
							const parent = _.find(semesters, { id });
							setBranchSemestre(parent);
							setModule(parent.modules[0]);
							setIframeSrc(parent.modules[0].playList.videos[0].iframe);
							return;
						};
						return (
							<div
								key={id}
								className="group flex items-center justify-between w-[200px]
              "
							>
								<span
									className=" relative text-xl font-bold border-2 p-2 rounded-lg duration-100 group-hover:text-transparent bg-clip-text
               group-hover:bg-gradient-to-l group-hover:from-yellow-600 group-hover:to-bgDark
               before:h-[2px] before:absolute before:w-[18px] before:bg-zinc-100 before:top-1/2
               before:-translate-y-1/2 before:right-[115%]"
								>
									{name}
								</span>
								<span className="block h-[1.6px] grow bg-zinc-100 -translate-y-1/2"></span>
								<div
									className="relative pl-4 flex flex-col gap-2 before:h-[81.5%] before:absolute
               before:w-[14px] before:rounded-l before:border-zinc-100 before:border-[1.8px] before:border-r-transparent
                before:top-1/2 before:-translate-y-1/2 before:left-0 "
								>
									{semesters.map((semestre) => {
										const { id, name, path } = semestre;
										return (
											<Link
												key={id}
												to={path}
												className="relative block rounded-full px-2 text-center font-semibold 
                      before:h-[1.6px] before:absolute before:w-[10px] before:bg-zinc-100 before:top-1/2
                     before:-translate-y-1/2 before:right-full hover:text-yellow-600 duration-100"
												onClick={() => handleClick(id)}
											>
												{name}
											</Link>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</section>
	);
};

export default CoursMap;
