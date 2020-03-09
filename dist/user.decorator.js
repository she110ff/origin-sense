"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator((data, req) => {
    const user = req.user;
    return user;
});
//# sourceMappingURL=user.decorator.js.map