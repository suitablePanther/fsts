const PlayListInfo = ({ module }) => {
	const { moduleName, playList } = module;
	const { description } = playList;
	return (
		<div className="flex flex-col gap-3 ">
			<h2 > {moduleName} </h2>
			<p className="text-justify">{description} </p>
		</div>
	);
};
 
export default PlayListInfo;
