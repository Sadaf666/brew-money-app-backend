// external libraries
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// schema
import { User } from './components/user/schema/user.schema';

// modules
import { AppModule } from './app.module';
import { UserModule } from './components/user/user.module';

const { BASE_URL } = process.env;

export function swaggerSetup(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle('BREW MONEY')
		.setDescription('Brew money APIs')
		.addServer(BASE_URL)
		.setVersion('1.0')
		.addBearerAuth(
			{
				name: 'Authorization',
				in: 'header',
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'Bearer'
			},
			'access-token'
		)
		.build();

	const document = SwaggerModule.createDocument(app, config, {
		extraModels: [User],
		include: [AppModule, UserModule]
	});

	SwaggerModule.setup('api-docs', app, document);
}
