import { Player } from './player';

export interface Account {
	id: number;
	email: string;
	password: string;
	revoceryCode: string;
	creationDate: number;
	tibiaCoins: number;
	characters: Player[];
}