/* eslint-disable no-constant-condition */
import { Outlet, useLocation } from "react-router-dom";
import MSUn from "./semestres/mip/components/SUn";
import Aside from "./AsideTemplate";
const Docs = () => {
	const { pathname } = useLocation();

	return (
		<section id="docs" className="relative flex py-0">
			<Aside />
			<main className="basis-full   py-14">
				{pathname === "/docs" ? <MSUn /> : <Outlet />}
			</main>
		</section>
	);
};

export default Docs;
