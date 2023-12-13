import ModuleContext from "./components/cours/context/ModuleContext";
import SemestresContext from "./components/cours/context/SemestresContext";
import VideoContext from "./components/cours/context/VideoContext";
import Router from "./routers/Router";

const App = () => {
	return (
		<>
			<SemestresContext>
				<ModuleContext>
					<VideoContext>
						<Router />
					</VideoContext>
				</ModuleContext>
			</SemestresContext>
		</>
	);
};

export default App;
