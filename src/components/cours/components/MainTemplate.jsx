import { createContext, useState } from "react";
import ModulesNav from "./mainComponents/ModulesNav";
import PlayListSection from "./mainComponents/PlayListSection";
import VideoSection from "./mainComponents/VideoSection";
import PlayListInfo from "./mainComponents/PlayListInfo";

export const MouleContext = createContext(null);
export const VideoContext = createContext(null);
// eslint-disable-next-line react/prop-types
const MainTemplate = ({ semestreData }) => {
	const { modules } = semestreData;
	const [module, setModule] = useState(modules[0]);
	const [iframeSrc, setIframeSrc] = useState(module.playList.videos[0].iframe);
	return (
		<main className="py-9 w-full">
			<MouleContext.Provider value={{ module, setModule }}>
				<ModulesNav semestre={modules} />
				<PlayListInfo module={module} />
				<VideoContext.Provider value={{ iframeSrc, setIframeSrc }}>
					<div className="flex gap-16 py-6 flex-col">
						<VideoSection iframe={iframeSrc} />
						<PlayListSection module={module} />
					</div>
				</VideoContext.Provider>
			</MouleContext.Provider>
		</main>
	);
};

export default MainTemplate;
