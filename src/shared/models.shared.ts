interface AtPayload {
	readonly sub: string;
	readonly roles: string[];
	readonly sid: string;
	readonly username: string;
	readonly LoggedUserGuid: string;
}

export { AtPayload };
