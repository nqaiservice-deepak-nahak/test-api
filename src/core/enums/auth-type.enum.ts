export enum AuthType {
	CREDENTIALS = 'CREDENTIALS',
	MICROSOFT = 'MICROSOFT'
}

export class AuthTypeGroup {
	static readonly ALL_AUTHTYPE: AuthType[] = [AuthType.CREDENTIALS, AuthType.MICROSOFT];
}
