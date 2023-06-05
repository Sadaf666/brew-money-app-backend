// external libraries
import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import {
	ExpressAdapter,
	NestExpressApplication
} from '@nestjs/platform-express';
import { urlencoded, json } from 'express';
import { ValidationPipe } from '@nestjs/common';

// modules
import { AppModule } from './app.module';

// documentation
import { swaggerSetup } from './swagger';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
		new ExpressAdapter(),
		{
			cors: true
		}
	);

	app.use(urlencoded({ extended: true }));
	app.use(json());
	app.set('trust proxy');

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

	swaggerSetup(app);

	const { PORT, NODE_ENV } = process.env;

	await app.listen(PORT, () => {
		console.log(
			`BREW MONEY listening on port - ${PORT} in ${NODE_ENV} mode.`
		);
	});
}
bootstrap();
