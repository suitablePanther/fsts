import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/NavBar";
import Docs from "./components/docs/Docs";
import About from "./components/About";
import Learning from "./components/learning/Learning";
// MiP
import MSOne from "./components/docs/semestres/mip/components/SOne";
import MSTwo from "./components/docs/semestres/mip/components/STwo";
import MSThree from "./components/docs/semestres/mip/components/SThree";
import MSFour from "./components/docs/semestres/mip/components/SFour";
/// MIP
// GEGM
import GSOne from "./components/docs/semestres/gegm/components/SOne";
import GSTwo from "./components/docs/semestres/gegm/components/STwo";
import GSThree from "./components/docs/semestres/gegm/components/SThree";
import GSFour from "./components/docs/semestres/gegm/components/SFour";
/// GEGM
// BCG
import BSOne from "./components/docs/semestres/bcg/components/SOne";
import BSTwo from "./components/docs/semestres/bcg/components/STwo";
import BSThree from "./components/docs/semestres/bcg/components/SThree";
import BSFour from "./components/docs/semestres/bcg/components/SFour";
import Error from "./components/Error";
/// BCG

const Router = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
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
				<Route path="*" Component={Error}/>
				<Route path="/about" Component={About} />
				<Route path="/learning" Component={Learning} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
