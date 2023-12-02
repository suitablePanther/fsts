/* eslint-disable react/prop-types */
const VideoSection = ({ iframe }) => {
	return (
		<div className="w-full aspect-video sm:w-5/6 md:w-2/3 m-auto">
			<iframe
				className="w-full h-full"
				src={iframe}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoSection;
