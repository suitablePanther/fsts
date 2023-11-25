import { NavLink } from "react-router-dom";
import { docsSemestres } from "../../branchesData";

const Aside = () => {
	// handleClick
	const handleClick = (e) => {
		const target = e.currentTarget;
		const spans = target.nextSibling;
		console.log(spans.firstChild);
		if (target.textContent.trim().toLowerCase() === "mip") {
			spans.classList.toggle("group-first:h-fit");
			target.firstChild.classList.toggle("group-first:rotate-0");
			return;
		}
		spans.classList.toggle("h-0");
		target.firstChild.classList.toggle("rotate-180");
		return;
	};
	///
	return (
		<aside
			className="sticky top-0 basis-1/3 h-screen justify-start pt-32 gap-2 hidden
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
							<span
								className="absolute right-2 top-1/2 -translate-y-1/2 
						 content-[url('/svgs/up.svg')] dark:content-[url('/svgs/dup.svg')] group-first:rotate-0 w-5 rotate-180"
							></span>
							{name}
						</span>
						<div
							id="semestre"
							className="group-first:h-fit flex h-0 flex-col overflow-hidden pt-0.5 gap-1 text-center text-sm"
						>
							{/* semestres map  */}
							{semestres.map((semestre) => {
								const { id, name, path } = semestre;
								return (
									<NavLink
										key={id}
										to={path}
										className="w-5/6 aria-[current='page']:text-sky-500 font-semibold capitalize m-auto rounded"
									>
										{name}
									</NavLink>
								);
							})}
							{/* semestres map  */}
						</div>
					</div>
				);
			})}
		</aside>
	);
};

export default Aside;
