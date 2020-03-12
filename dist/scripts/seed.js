"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const typeorm_1 = require("typeorm");
const config_service_1 = require("../config/config.service");
const item_service_1 = require("../item/item.service");
const item_entity_1 = require("../model/item.entity");
const item_dto_1 = require("../item/item.dto");
async function run() {
    const seedUser = { id: 'seed-user' };
    const seedId = Date.now()
        .toString()
        .split('')
        .reverse()
        .reduce((s, it, x) => (x > 3 ? s : (s += it)), '');
    const opt = Object.assign(Object.assign({}, config_service_1.configService.getTypeOrmConfig()), { debug: true });
    const connection = await typeorm_1.createConnection(opt);
    const itemService = new item_service_1.ItemService(connection.getRepository(item_entity_1.Item));
    const work = _.range(1, 10)
        .map(n => item_dto_1.ItemDTO.from({
        name: `seed${seedId}-${n}`,
        description: 'created from seed'
    }))
        .map(dto => itemService.create(dto, seedUser)
        .then(r => (console.log('done ->', r.name), r)));
    return await Promise.all(work);
}
run()
    .then(_ => console.log('...wait for script to exit'))
    .catch(error => console.error('seed error', error));
//# sourceMappingURL=seed.js.map