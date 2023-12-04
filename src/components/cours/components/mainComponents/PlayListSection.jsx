import { NavLink } from "react-router-dom";
import _ from "lodash";
import { useContext } from "react";
import { VideoContext } from "../../Cours";

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
		<div className=" px-3 sm:px-9">
			<h3 className="pb-6 bg-gradient-to-r text-transparent from-main w-fit to-red-500 bg-clip-text">watch list:</h3>
			<nav className=" bg-zinc-800/70 sm:ml-12 w-full sm:w-[80%] lg:w-[50%] border-2 rounded-md  border-zinc-400">
				{videos.map((video) => {
					const { id, title } = video;
					return (
						<NavLink
							key={id}
							className="flex py-2 text-lg font-semibold border-b border-zinc-400"
							onClick={() => handleClick(id)}
						>
							<span className=" px-3">{id}</span>
							<span className="pl-3 hover:pl-6 border-l-2 border-zinc-400 duration-150 text-white block capitalize">
								{title}
							</span>
						</NavLink>
					);
				})}
			</nav>
		</div>
	);
};

export default PlayListSection;
