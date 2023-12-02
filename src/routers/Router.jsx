import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar";
import Docs from "../components/docs/Docs";
import About from "../components/About";
import Learning from "../components/learning/Learning";
// MiP
import MSOne from "../components/docs/semestres/mip/components/SOne";
import MSTwo from "../components/docs/semestres/mip/components/STwo";
import MSThree from "../components/docs/semestres/mip/components/SThree";
import MSFour from "../components/docs/semestres/mip/components/SFour";
/// MIP
// GEGM
import GSOne from "../components/docs/semestres/gegm/components/SOne";
import GSTwo from "../components/docs/semestres/gegm/components/STwo";
import GSThree from "../components/docs/semestres/gegm/components/SThree";
import GSFour from "../components/docs/semestres/gegm/components/SFour";
/// GEGM
// BCG
import BSOne from "../components/docs/semestres/bcg/components/SOne";
import BSTwo from "../components/docs/semestres/bcg/components/STwo";
import BSThree from "../components/docs/semestres/bcg/components/SThree";
import BSFour from "../components/docs/semestres/bcg/components/SFour";
import Error from "../components/Error";
import MIPBranch from "../components/learning/branches/MIP/MIPBranch";
import GEGMBranch from "../components/learning/branches/GEGM/GEGMBranch";
import BCGBranch from "../components/learning/branches/BCG/BCGBranch";
import MipSUn from "../components/learning/branches/MIP/semestres/s_un/MipSUn";
import MipSDeux from "../components/learning/branches/MIP/semestres/s_deux/MipSDeux";
import MipSTrois from "../components/learning/branches/MIP/semestres/s_trois/MipSTrois";
import MipSQuatre from "../components/learning/branches/MIP/semestres/s_quatre/MipSQuatre";

/// BCG
import GegmSUn from "../components/learning/branches/GEGM/semestres/s_un/GeGmSUn";
import GegmSDeux from "../components/learning/branches/GEGM/semestres/s_deux/GegmSDeux";
import GegmSTrois from "../components/learning/branches/GEGM/semestres/s_trois/GegmSTrois";
import GegmSQuatre from "../components/learning/branches/GEGM/semestres/s_quatre/GegmSQuatre";
import BcgSUn from "../components/learning/branches/BCG/semestres/s_un/BcgSUn";
import BcgSDeux from "../components/learning/branches/BCG/semestres/s_deux/BcgSDeux";
import BcgSTrois from "../components/learning/branches/BCG/semestres/s_trois/BcgSTrois";
import BcgSQuatre from "../components/learning/branches/BCG/semestres/s_quatre/BcgSQuatre";

const Router = ({ children }) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/cours" Component={Learning} />
				<Route path="/docs" Component={Docs}>
					{/* MIP  */}
					<Route path="/docs/mip/sone" Component={MSOne} />
					<Route path="/docs/mip/stwo" Component={MSTwo} />
					<Route path="/docs/mip/sthree" Component={MSThree} />
					<Route path="/docs/mip/sfour" Component={MSFour} />
					{/* MIP  */}
					{/* GE-GM  */}
					<Route path="/docs/gegm/sone" Component={GSOne} />
					<Route path="/docs/gegm/stwo" Component={GSTwo} />
					<Route path="/docs/gegm/sthree" Component={GSThree} />
					<Route path="/docs/gegm/sfour" Component={GSFour} />
					{/* GE-GM  */}
					{/* BCG */}
					<Route path="/docs/bcg/sone" Component={BSOne} />
					<Route path="/docs/bcg/stwo" Component={BSTwo} />
					<Route path="/docs/bcg/sthree" Component={BSThree} />
					<Route path="/docs/bcg/sfour" Component={BSFour} />
					{/* BCG */}
				</Route>
				<Route path="*" Component={Error} />
				<Route path="/about" Component={About} />
				<Route path="/cours" Component={Learning}>
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
