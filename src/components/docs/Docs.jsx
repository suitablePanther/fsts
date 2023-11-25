/* eslint-disable no-constant-condition */
import { Outlet, useLocation } from "react-router-dom";
import MSOne from "./semestres/mip/components/SOne";
import Aside from "./AsideTemplate";
const Docs = () => {
	const { pathname } = useLocation();

	return (
		<section id="docs" className="relative flex py-0">
			<Aside />
			<main className="basis-full bg-[#eeeeee] dark:bg-sky-950/90 py-14">
				{pathname === "/docs" ? <MSOne /> : <Outlet />}
			</main>
		</section>
	);
};

export default Docs;
