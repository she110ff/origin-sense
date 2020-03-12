"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("../model/item.entity");
const typeorm_2 = require("typeorm");
const item_dto_1 = require("./item.dto");
let ItemService = class ItemService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo.find()
            .then(items => items.map(e => item_dto_1.ItemDTO.fromEntity(e)));
    }
    async create(dto, user) {
        return this.repo.save(item_dto_1.ItemDTO.toEntity(dto, user))
            .then(e => item_dto_1.ItemDTO.fromEntity(e));
    }
};
ItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map