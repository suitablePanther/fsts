import ModuleContext from "./components/cours/Contexts/ModuleContext";
import SemestresContext from "./components/cours/Contexts/SemestresContext";
import VideoContext from "./components/cours/Contexts/VideoContext";
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
