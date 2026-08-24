import { AppConfigService } from '@app/config/appconfig.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { EncryptionModule } from './encryption/encryption.module';
import ApiLogger from './logger/api-logger';
import AppLogger from './logger/app-logger';

const getProviders = (): any[] => {
	return [
		AppConfigService,
		AppLogger,
		ApiLogger,
	];
};

const importProviders = (): any[] => {
	return [ConfigModule.forRoot({ envFilePath: '.env.prod' }),
          EncryptionModule
        ];
};

const exportProviders = (): any[] => {
	return [AppConfigService, AppLogger, ApiLogger,
          EncryptionModule
           ];
};

export { exportProviders, getProviders, importProviders };
