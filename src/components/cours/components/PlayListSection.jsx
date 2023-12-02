import { NavLink } from "react-router-dom";
import _ from "lodash";
import { useContext } from "react";
import { VideoContext } from "./MainTemplate";

const PlayListSection = ({ module }) => {
	const { setIframeSrc } = useContext(VideoContext);
	const { videos } = module.playList;
	// handle Click
	const handleClick = (id) => {
		const video = _.find(videos, { id });
		const { iframe } = video;
		setIframeSrc(iframe);
		return;
	};
	return (
		<nav className="bg-cyan-500 m-auto w-full sm:w-[80%] lg:w-[50%] border-2 rounded-md border-zinc-400">
			{videos.map((video) => {
				const { id, title } = video;
				return (
					<NavLink
						key={id}
						className="block  py-1 border-b"
						onClick={() => handleClick(id)}
					>
						<span className="border-r px-2 text-white">{id}</span>
						<span className="pl-2 hover:pl-4 duration-150 text-white">
							{title}
						</span>
					</NavLink>
				);
			})}
		</nav>
	);
};

export default PlayListSection;
