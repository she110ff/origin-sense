import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
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

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.userId === username);
  }
}
