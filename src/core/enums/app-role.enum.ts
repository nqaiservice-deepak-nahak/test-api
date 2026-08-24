export enum RoleType {
	ADMIN = 'admin',
	USER = 'user'
}

export const RoleGroup = {
	ADMIN_ONLY: [RoleType.ADMIN],
	ALL_ROLES: [RoleType.ADMIN, RoleType.USER]
};
