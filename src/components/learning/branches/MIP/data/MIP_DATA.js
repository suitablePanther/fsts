import { MIP_S_DEUX_DATA } from "./mip_s_deux";
import { MIP_S_QUATRE_DATA } from "./mip_s_quatre";
import { MIP_S_TROIS_DATA } from "./mip_s_trois";
import { MIP_S_UN_DATA } from "./mip_s_un";

export const MIP_DATA = {
	id: 1,
	name: "MIP",
	isShow: true,
	semesters: [
		MIP_S_UN_DATA,
		MIP_S_DEUX_DATA,
		MIP_S_TROIS_DATA,
		MIP_S_QUATRE_DATA,
	],
};
