"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class init1583766205825 {
    constructor() {
        this.name = 'init1583766205825';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `item` (`id` varchar(36) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `isArchived` tinyint NOT NULL DEFAULT 0, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdBy` varchar(300) NOT NULL, `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `lastChangedBy` varchar(300) NOT NULL, `internalComment` varchar(300) NULL, `name` varchar(300) NOT NULL, `description` varchar(300) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `item`", undefined);
    }
}
exports.init1583766205825 = init1583766205825;
//# sourceMappingURL=1583766205825-init.js.map