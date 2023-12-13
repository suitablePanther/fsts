import { createContext, useContext, useState } from "react";
import { ModuleContextAPI } from "./ModuleContext";

export const VideoContextAPI = createContext(null);

const VideoContext = ({ children }) => {
	const { module } = useContext(ModuleContextAPI);
	const [iframeSrc, setIframeSrc] = useState(module?.playList?.videos[0]?.iframe);

	return (
		<VideoContextAPI.Provider value={{ iframeSrc, setIframeSrc }}>
			{children}
		</VideoContextAPI.Provider>
	);
};

export default VideoContext;
