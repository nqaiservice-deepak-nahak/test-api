import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
	private readonly envConfig: { [key: string]: any } = {};

	constructor() {
		/*app configurations*/
		this.envConfig.app = {
			port: process.env.APP_PORT || 3000,
			environment: process.env.ENVIRONMENT
		};

	}

	get(key: string): any {
		return this.envConfig[key];
	}
}
