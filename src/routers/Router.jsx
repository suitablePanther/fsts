import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar";
import Docs from "../components/docs/Docs";
import About from "../components/About";
import Cours from "../components/cours/Cours";
// MiP
import MSUn from "../components/docs/semestres/mip/components/SUn";
import MSDeux from "../components/docs/semestres/mip/components/SDeux";
import MSTrois from "../components/docs/semestres/mip/components/STrois";
import MSQuatre from "../components/docs/semestres/mip/components/SQuatre";
/// MIP
// GEGM
import GSUn from "../components/docs/semestres/gegm/components/SUn";
import GSDeux from "../components/docs/semestres/gegm/components/SDeux";
import GSTrois from "../components/docs/semestres/gegm/components/STrois";
import GSQuatre from "../components/docs/semestres/gegm/components/SQuatre";
/// GEGM
// BCG
import BSUn from "../components/docs/semestres/bcg/components/SUn";
import BSDeux from "../components/docs/semestres/bcg/components/SDeux";
import BSTrois from "../components/docs/semestres/bcg/components/STrois";
import BSQuatre from "../components/docs/semestres/bcg/components/SQuatre";
import Error from "../components/Error";

import CoursMap from "../components/cours/CoursMap";

const Router = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/docs" Component={Docs}>
					{/* MIP  */}
					<Route path="/docs/mip/sun" Component={MSUn} />
					<Route path="/docs/mip/sdeux" Component={MSDeux} />
					<Route path="/docs/mip/strois" Component={MSTrois} />
					<Route path="/docs/mip/squatre" Component={MSQuatre} />
					{/* MIP  */}
					{/* GE-GM  */}
					<Route path="/docs/gegm/sun" Component={GSUn} />
					<Route path="/docs/gegm/sdeux" Component={GSDeux} />
					<Route path="/docs/gegm/strois" Component={GSTrois} />
					<Route path="/docs/gegm/squatre" Component={GSQuatre} />
					{/* GE-GM  */}
					{/* BCG */}
					<Route path="/docs/bcg/sun" Component={BSUn} />
					<Route path="/docs/bcg/sdeux" Component={BSDeux} />
					<Route path="/docs/bcg/strois" Component={BSTrois} />
					<Route path="/docs/bcg/squatre" Component={BSQuatre} />
					{/* BCG */}
				</Route>
				<Route path="/cours/:branch/:semestre" Component={Cours} />
				<Route path="/coursmap" Component={CoursMap} />
				<Route path="/about" Component={About} />
				<Route path="*" Component={Error} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
