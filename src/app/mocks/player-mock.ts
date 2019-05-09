import { Player, PlayerOnline } from '../classes/player';

export const PLAYERS: Player[] = [
	{ id: 1, name: "George", deaths: "", experience: 0, health: 150, healthmax: 150, house: "", lastlogin: Date.now(), level: 1, lookaddons: 0, lookbody: 0, lookfeet: 0, lookhead: 0, looklegs: 0, looktype: 126, maglevel: 0, mana: 0, manamax: 0, outfit: "", sex: 1, skill_axe: 10, skill_club: 10, skill_dist: 10, skill_fishing: 10, skill_fist: 10, skill_shielding: 10, skill_sword: 10, stamina: 0, town_id: 1, vocation: 1 }
];

export const PLAYERS_ONLINE: PlayerOnline[] = [
	{ id: 1, name: 'Mark', level: 112, lastLogin: Date.now() },
	{ id: 2, name: 'Fostu', level: 75, lastLogin: Date.now() },
	{ id: 3, name: 'Poro', level: 1, lastLogin: Date.now() }
];