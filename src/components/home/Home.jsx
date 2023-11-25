import Clubs from "./Clubs";
import Branches from "./Branches";
import Landing from "./Landing";
import Footer from "../../helpers/Footer";

const Home = () => {
	return (
		<main>
			<Landing />
			<Clubs />
			<Branches />
			<Footer />
		</main>
	);
};

export default Home;
