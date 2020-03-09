export declare abstract class BaseEntity {
    id: string;
    isActive: boolean;
    isArchived: boolean;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    lastChangedBy: string;
    internalComment: string | null;
    private setCreateDate;
    setUpdateDate(): void;
}
