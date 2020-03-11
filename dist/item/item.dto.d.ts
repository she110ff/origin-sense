import { Item } from '../model/item.entity';
import { User } from '../user.decorator';
export declare class ItemDTO implements Readonly<ItemDTO> {
    id: string;
    name: string;
    description: string;
    static from(dto: Partial<ItemDTO>): ItemDTO;
    static fromEntity(entity: Item): ItemDTO;
    static toEntity(dto: Partial<ItemDTO>, user?: User): Item;
}
