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
import MIPBranch from "../components/cours/branches/MIP/MIPBranch";
import GEGMBranch from "../components/cours/branches/GEGM/GEGMBranch";
import BCGBranch from "../components/cours/branches/BCG/BCGBranch";
import MipSUn from "../components/cours/branches/MIP/semestres/s_un/MipSUn";
import MipSDeux from "../components/cours/branches/MIP/semestres/s_deux/MipSDeux";
import MipSTrois from "../components/cours/branches/MIP/semestres/s_trois/MipSTrois";
import MipSQuatre from "../components/cours/branches/MIP/semestres/s_quatre/MipSQuatre";

/// BCG
import GegmSUn from "../components/cours/branches/GEGM/semestres/s_un/GegmSUn";
import GegmSDeux from "../components/cours/branches/GEGM/semestres/s_deux/GegmSDeux";
import GegmSTrois from "../components/cours/branches/GEGM/semestres/s_trois/GegmSTrois";
import GegmSQuatre from "../components/cours/branches/GEGM/semestres/s_quatre/GegmSQuatre";
import BcgSUn from "../components/cours/branches/BCG/semestres/s_un/BcgSUn";
import BcgSDeux from "../components/cours/branches/BCG/semestres/s_deux/BcgSDeux";
import BcgSTrois from "../components/cours/branches/BCG/semestres/s_trois/BcgSTrois";
import BcgSQuatre from "../components/cours/branches/BCG/semestres/s_quatre/BcgSQuatre";

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
				<Route path="*" Component={Error} />
				<Route path="/about" Component={About} />
				<Route path="/cours" Component={Cours}>
					<Route path="/cours/mip" Component={MIPBranch}>
						<Route path="/cours/mip/s_un" Component={MipSUn} />
						<Route path="/cours/mip/s_deux" Component={MipSDeux} />
						<Route path="/cours/mip/s_trois" Component={MipSTrois} />
						<Route path="/cours/mip/s_quatre" Component={MipSQuatre} />
					</Route>
					<Route path="/cours/gegm" Component={GEGMBranch}>
						<Route path="/cours/gegm/s_un" Component={GegmSUn} />
						<Route path="/cours/gegm/s_deux" Component={GegmSDeux} />
						<Route path="/cours/gegm/s_trois" Component={GegmSTrois} />
						<Route path="/cours/gegm/s_quatre" Component={GegmSQuatre} />
					</Route>
					<Route path="/cours/bcg" Component={BCGBranch}>
						<Route path="/cours/bcg/s_un" Component={BcgSUn} />
						<Route path="/cours/bcg/s_deux" Component={BcgSDeux} />
						<Route path="/cours/bcg/s_trois" Component={BcgSTrois} />
						<Route path="/cours/bcg/s_quatre" Component={BcgSQuatre} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
