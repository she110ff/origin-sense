import { Item } from '../model/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from './item.dto';
import { User } from '../user.decorator';
export declare class ItemService {
    private readonly repo;
    constructor(repo: Repository<Item>);
    getAll(): Promise<ItemDTO[]>;
    create(dto: ItemDTO, user: User): Promise<ItemDTO>;
}
