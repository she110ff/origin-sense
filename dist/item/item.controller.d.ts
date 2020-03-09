import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';
import { User } from '../user.decorator';
export declare class ItemController {
    private serv;
    constructor(serv: ItemService);
    getAll(): Promise<ItemDTO[]>;
    post(user: User, dto: ItemDTO): Promise<ItemDTO>;
}
