"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/config.service");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (true || !config_service_1.configService.isProduction()) {
        const document = swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder()
            .setTitle('Item API')
            .setDescription('My Item API')
            .build());
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map