import { createContext, useContext, useState } from "react";
import ModulesNav from "./mainComponents/ModulesNav";
import PlayListSection from "./mainComponents/PlayListSection";
import VideoSection from "./mainComponents/VideoSection";
import PlayListInfo from "./mainComponents/PlayListInfo";
import { ModuleContext, VideoContext } from "../Cours";

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ semestreData }) => {
	const { iframeSrc } = useContext(VideoContext);
	const { module } = useContext(ModuleContext);
	const { modules } = semestreData;
	return (
		<main className="py-9 w-full">
			<ModulesNav semestre={modules} />
			<PlayListInfo module={module} />
			<div className="flex gap-16 py-6 flex-col">
				<VideoSection iframe={iframeSrc} />
				<PlayListSection module={module} />
			</div>
		</main>
	);
};

export default MainTemplate;
