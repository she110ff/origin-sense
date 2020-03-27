export declare abstract class BaseEntity {
    id: string;
    isActive: boolean;
    isArchived: boolean;
    createdAt: Date;
    updatedAt: Date;
    private setCreateDate;
    setUpdateDate(): void;
}
