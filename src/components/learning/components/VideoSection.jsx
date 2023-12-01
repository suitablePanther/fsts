/* eslint-disable react/prop-types */
const VideoSection = ({ iframe }) => {
	return (
		<div>
			<iframe
				width="560"
				height="315"
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
