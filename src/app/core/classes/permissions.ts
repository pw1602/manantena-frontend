interface PermissionFlags {
	//Global
	viewAdminPanel: boolean;

	// Newses
	addNews: boolean;
	removeNews: boolean;
	editNews: boolean;
	
	// Permissions
	addPermission: boolean;
	removePermission: boolean;
	editPermission: boolean;

	// Global
	viewGlobalLogs: boolean;

	// Reports
	viewReports: boolean;
	editReports: boolean;
	removeReports: boolean;
	addReports: boolean;

	// Player
	viewPlayerIp: boolean;
	viewPlayerItems: boolean;
	viewPlayerLogs: boolean;
	
	// Guild
	editGuilds: boolean;
	removeGuilds: boolean;
}

export interface Permissions {
	id: number;
	account_id: number;
	flags: PermissionFlags;
}