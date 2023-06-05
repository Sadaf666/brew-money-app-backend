"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("./components/user/schema/user.schema");
const app_module_1 = require("./app.module");
const user_module_1 = require("./components/user/user.module");
const { BASE_URL } = process.env;
function swaggerSetup(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('BREW MONEY')
        .setDescription('Brew money APIs')
        .addServer(BASE_URL)
        .setVersion('1.0')
        .addBearerAuth({
        name: 'Authorization',
        in: 'header',
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Bearer'
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels: [user_schema_1.User],
        include: [app_module_1.AppModule, user_module_1.UserModule]
    });
    swagger_1.SwaggerModule.setup('api-docs', app, document);
}
exports.swaggerSetup = swaggerSetup;
//# sourceMappingURL=swagger.js.map