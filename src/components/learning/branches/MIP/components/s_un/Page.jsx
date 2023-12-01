import MainTemplate from "../../../../components/MainTemplate";
// import { sUnModulesData } from "../branches/MIP/components/s_un/s_un_modules_data";
import { sUnModulesData } from "./s_un_modules_data";
const Page = () => {
	return <MainTemplate semestreData={sUnModulesData} />;
};

export default Page;
