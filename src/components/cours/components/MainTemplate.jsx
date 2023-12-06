import { useContext } from "react";
import PlayListSection from "./mainComponents/PlayListSection";
import VideoSection from "./mainComponents/VideoSection";
import PlayListInfo from "./mainComponents/PlayListInfo";
import { ModuleContext, VideoContext } from "../Cours";
import Aside from "./AsideTemplate";
import { COURS_DATA } from "../data";

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ semestreData }) => {
	const { iframeSrc } = useContext(VideoContext);
	const { module } = useContext(ModuleContext);
	return (
		<main className="pt-20 relative w-full px-3 m-auto container">
			<Aside branchData={COURS_DATA} />
			<PlayListInfo module={module} />
			<div className="flex gap-16 py-6 flex-col">
				<VideoSection iframe={iframeSrc} />
				<PlayListSection module={module} />
			</div>
		</main>
	);
};

export default MainTemplate;
