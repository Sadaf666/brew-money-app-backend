"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = require("express");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("./swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), {
        cors: true
    });
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, express_1.json)());
    app.set('trust proxy');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    (0, swagger_1.swaggerSetup)(app);
    const { PORT, NODE_ENV } = process.env;
    await app.listen(PORT, () => {
        console.log(`BREW MONEY listening on port - ${PORT} in ${NODE_ENV} mode.`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map