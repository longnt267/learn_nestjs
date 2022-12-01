import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base';
import { Users } from 'src/modules/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Users)
export class UserRepository extends BaseRepository<Users> {
  constructor(@InjectRepository(Users) readonly usersModel: Repository<Users>) {
    super(usersModel);
  }
}
