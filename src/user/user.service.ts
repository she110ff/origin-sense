import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

export type MockUser = any;

@Injectable()
export class UserService {
  private users: MockUser[];

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ where: { email: email } });
  }

  async findOneMock(username: string): Promise<User | undefined> {
    return this.users.find(user => user.userId === username);
  }

  private createdUserMock() {
    this.users = [
      {
        userId: 'youngsoo.j@gmail.com',
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 'youngsoo.j@gmail.com',
        username: 'san',
        password: 'san',
      },
      {
        userId: 'youngsoo.j@gmail.com',
        username: 'tom',
        password: 'tom',
      },
    ];
  }
}
