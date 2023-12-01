const PlayListInfo = ({module}) => {
	const { moduleName, playList } = module;
	const { description } = playList;
	return (
		<div>
			<h2> {moduleName} </h2>
			<p>{description} </p>
		</div>
	);
};

export default PlayListInfo;
