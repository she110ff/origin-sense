import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: '1',
        username: 'john',
        password: 'changeme',
      },
      {
        userId: '2',
        username: 'san',
        password: 'san',
      },
      {
        userId: '3',
        username: 'tom',
        password: 'tom',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
