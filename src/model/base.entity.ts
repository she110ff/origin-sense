import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'boolean', default: false })
    isArchived: boolean;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt!: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @UpdateDateColumn({ type: 'timestamp'})
    updatedAt!: Date;

    @Column({ type: 'varchar', length: 300 })
    lastChangedBy: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    internalComment: string | null;

    @BeforeInsert()
    private setCreateDate(): void {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    public setUpdateDate(): void {
      this.updatedAt = new Date();
    }
}   