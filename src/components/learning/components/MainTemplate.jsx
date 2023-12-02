import { createContext, useState } from "react";
import ModulesNav from "./ModulesNav";
import PlayListSection from "./PlayListSection";
import VideoSection from "./VideoSection";
import PlayListInfo from "./PlayListInfo";

export const MouleContext = createContext(null);
export const VideoContext = createContext(null);
// eslint-disable-next-line react/prop-types
const MainTemplate = ({ semestreData }) => {
	const {modules} = semestreData
	const [module, setModule] = useState(modules[0]);
	const [iframeSrc, setIframeSrc] = useState(module.playList.videos[0].iframe);
	return (
		<main className="pt-9 w-full">
			<MouleContext.Provider value={{ module, setModule }}>
				<ModulesNav semestre={modules} />
				<PlayListInfo module={module} />
				<VideoContext.Provider value={{ iframeSrc, setIframeSrc }}>
					<VideoSection iframe={iframeSrc} />
					<PlayListSection module={module} />
				</VideoContext.Provider>
			</MouleContext.Provider>
		</main>
	);
};

export default MainTemplate;
