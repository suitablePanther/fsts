/* eslint-disable no-constant-condition */
import { Outlet, useLocation } from "react-router-dom";
import MSOne from "./semestres/mip/components/SOne";
import Aside from "./AsideTemplate";
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
			<Aside handleClick={handleClick} />
			<main className="basis-full bg-[#eeeeee] dark:bg-sky-950/90 py-14">
				{pathname === "/docs" ? <MSOne /> : <Outlet />}
			</main>
		</section>
	);
};

export default Docs;
