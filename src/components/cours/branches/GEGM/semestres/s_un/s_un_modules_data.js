import {GEGM_S_UN_MODULE_UN_VIDEOS} from  "./modules_videos/module_un_videos"
import {GEGM_S_UN_MODULE_DEUX_VIDEOS} from  "./modules_videos/module_deux_videos"
import { GEGM_S_UN_MODULE_TROIS_VIDEOS } from "./modules_videos/module_trois_videos"

import {GEGM_S_UN_MODULE_QUATRE_VIDEOS} from "./modules_videos/module_quatre_videos"
import { GEGM_S_UN_MODULE_SINQ_VIDEOS } from "./modules_videos/module_sinq_videos";
import { GEGM_S_UN_MODULE_SIX_VIDEOS } from "./modules_videos/module_six_videos";
const GEGM_S_UN_MODULES_DATA = [
	{
		id: 1,
		moduleName: "Module 1",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module description",
			videos: GEGM_S_UN_MODULE_UN_VIDEOS,
		},
	},
	{
		id: 2,
		moduleName: "Module 2",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module 2 description",
			videos: GEGM_S_UN_MODULE_DEUX_VIDEOS,
		},
	},
	{
		id: 3,
		moduleName: "Module 3",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module description",
			videos: GEGM_S_UN_MODULE_TROIS_VIDEOS,
		},
	},
	{
		id: 4,
		moduleName: "Module 4",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module description",
			videos: GEGM_S_UN_MODULE_QUATRE_VIDEOS,
		},
	},
	{
		id: 5,
		moduleName: "Module 5",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module description",
			videos: GEGM_S_UN_MODULE_SINQ_VIDEOS,
		},
	},
	{
		id: 6,
		moduleName: "Module 6",
		providedLink: "sisttara.com",
		playList: {
			id: 1,
			owner: "Sisttara",
			description: "module description",
			videos: GEGM_S_UN_MODULE_SIX_VIDEOS,
		},
	},
];

export { GEGM_S_UN_MODULES_DATA };
