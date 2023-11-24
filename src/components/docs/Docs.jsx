/* eslint-disable no-constant-condition */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { docsSemestres } from "../../branchesData";
import MSOne from "./semestres/mip/components/SOne";
const Docs = () => {
	const { pathname } = useLocation();
	const handleClick = (e) => {
		const target = e.currentTarget;
		const spans = target.nextSibling;
		if (target.textContent.toLowerCase() === "mip") {
			spans.classList.toggle("group-first:h-fit");
			target.firstChild.classList.toggle("group-first:rotate-0");
			return;
		}
		spans.classList.toggle("h-0");
		target.firstChild.classList.toggle("rotate-180");
		return;
	};
	return (
		<section id="docs" className="flex py-0">
			<aside
				className="basis-1/3 justify-start pt-32 gap-2 hidden
			 sm:flex sm:flex-col max-w-[200px] bg-sky-800"
			>
				{docsSemestres.map((branch) => {
					const { id, name, semestres } = branch;
					return (
						<div key={id} className="group">
							<span
								className="text-center group-gr relative 
								 py-[1px] block rounded-md font-semibold"
								onClick={handleClick}
							>
								<span className="absolute right-2 top-1/2 -translate-y-1/2 text-red-300
								 content-[url('/public/svgs/up.svg')] dark:content-[url('/public/svgs/dup.svg')] group-first:rotate-0 w-5 rotate-180"></span>
								{name}
							</span>
							<div
								id="semestre"
								className="group-first:h-fit flex h-0 flex-col overflow-hidden pt-0.5 gap-1 text-center text-sm"
							>
								{semestres.map((semestre) => {
									const { id, name, path } = semestre;
									return (
										<NavLink
											key={id}
											to={path}
											className="w-5/6 hover:text-blue font-semibold duration-100 ease-linear capitalize m-auto rounded"
										>
											{name}
										</NavLink>
									);
								})}
							</div>
						</div>
					);
				})}
			</aside>
			<main className="basis-full bg-[#eeeeee] dark:bg-sky-950/90 py-14">
				{pathname === "/docs" || "/docs/" ? <MSOne /> : <Outlet />}
			</main>
		</section>
	);
};

export default Docs;
