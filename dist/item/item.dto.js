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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const item_entity_1 = require("../model/item.entity");
class ItemDTO {
    static from(dto) {
        const it = new ItemDTO();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        return it;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            name: entity.name,
            description: entity.description,
        });
    }
    static toEntity(dto, user = null) {
        const it = new item_entity_1.Item();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        it.createdAt = new Date();
        return it;
    }
}
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], ItemDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ItemDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ItemDTO.prototype, "description", void 0);
exports.ItemDTO = ItemDTO;
//# sourceMappingURL=item.dto.js.map