export interface Player {
        id: number;
        name: string;
		level: number;
		vocation: number;
		health: number;
		healthmax: number;
		experience: number;
		lookbody: number;
		lookfeet: number;
		lookhead: number;
		looklegs: number;
		looktype: number;
		lookaddons: number;
		maglevel: number;
		mana: number;
		manamax: number;
		town_id: number;
		sex: number;
		lastlogin: number;
		stamina: number;
		skill_fist: number;
		skill_club: number;
		skill_sword: number;
		skill_axe: number;
		skill_dist: number;
		skill_shielding: number;
		skill_fishing: number;
		house: string;
		deaths: string;
		outfit: string
		//online: number;
		//marriage: number;
		//description: string;
        //guild: string = "Example Guild";
        //created: string = "00/00/0000";
        //status: string = "Premium Account";
}

export interface PlayerOnline {
	id: number;
	name: string;
	level: number;
	lastLogin: number;
}