import { Account } from '../classes/account';
import { Permissions } from '../classes/permissions';

export const ACCOUNTS: Account[] = [
	{ id: 1, email: 'admin', password: 'admin', characters: null, creationDate: Date.now(), revoceryCode: null, tibiaCoins: 0 },
	{ id: 2, email: 'user', password: 'user', characters: null, creationDate: Date.now(), revoceryCode: null, tibiaCoins: 0 }
];

export const PERMISSIONS: Permissions[] = [
	{ id: 1, account_id: 1, flags: { viewAdminPanel: true, addNews: true, removeNews: true, editNews: true, addPermission: true, removePermission: true, editPermission: true, addReports: true, removeReports: true, editReports: true, removeGuilds: true, editGuilds: true, viewGlobalLogs: true, viewPlayerIp: true, viewPlayerItems: true, viewPlayerLogs: true, viewReports: true }},
	{ id: 2, account_id: 2, flags: { viewAdminPanel:false, addNews: false, removeNews: false, editNews: false, addPermission: false, removePermission: false, editPermission: false, addReports: false, removeReports: false, editReports: false, removeGuilds: false, editGuilds: false, viewGlobalLogs: false, viewPlayerIp: false, viewPlayerItems: false, viewPlayerLogs: false, viewReports: false }}
];