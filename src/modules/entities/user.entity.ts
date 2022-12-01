import { BaseTable } from 'src/base';
import { Column, Entity } from 'typeorm';

@Entity()
export class Users extends BaseTable {
    constructor(partial: Partial<Users>) {
        super();
        Object.assign(this, partial);
    }

    @Column({
        type: 'varchar',
    })
    user_name: string;

    @Column({
        type: 'varchar',
    })
    password: string;
}
