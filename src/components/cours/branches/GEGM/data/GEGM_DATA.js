import { GEGM_S_DEUX_DATA } from "./gegm_s_deux";
import { GEGM_S_QUATRE_DATA } from "./gegm_s_quatre";
import { GEGM_S_TROIS_DATA } from "./gegm_s_trois";
import { GEGM_S_UN_DATA } from "./gegm_s_un";

export const GEGM_DATA = {
	id: 2,
	name: "GEGM",
	isShow: true,
	semesters: [
		GEGM_S_UN_DATA,
		GEGM_S_DEUX_DATA,
		GEGM_S_TROIS_DATA,
		GEGM_S_QUATRE_DATA,
	],
};
