// external libraries
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigService) {}

	PORT: string = this.configService.get<string>('PORT');
	ENV: string = this.configService.get<string>('NODE_ENV');

	getHello(): string {
		return `BREW MONEY listening on port - ${this.PORT} in ${this.ENV} mode.`;
	}
}
