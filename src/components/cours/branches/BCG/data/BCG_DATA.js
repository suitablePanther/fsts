import { BCG_S_DEUX_DATA } from "./bcg_s_deux";
import { BCG_S_QUATRE_DATA } from "./bcg_s_quatre";
import { BCG_S_TROIS_DATA } from "./bcg_s_trois";
import { BCG_S_UN_DATA } from "./bcg_s_un";

export const BCG_DATA = {
	id: 3,
	name: "BCG",
	isShow: true,
	semesters: [
		BCG_S_UN_DATA,
		BCG_S_DEUX_DATA,
		BCG_S_TROIS_DATA,
		BCG_S_QUATRE_DATA,
	],
};
