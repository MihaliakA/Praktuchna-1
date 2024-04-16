import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw new NotFoundException(`user with id: ${id} not found`);
    }
    return user;    
  }

  public users: User[] = [
    {id: 1, name: 'Andriy', email: 'andriy@gmail.com', subscription: true}, 
    {id: 2, name: 'Sasha', email: 'sasga@gmail.com', subscription: false},
  ];
}
