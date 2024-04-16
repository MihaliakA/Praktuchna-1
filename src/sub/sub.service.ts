import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SubService { 
  constructor(private readonly usersService: UsersService) {}

  check(id: number) {
    const user = this.usersService.users.find(user => user.id === id && user.subscription === true);
    if (!user) {
        return 'Subscription not found';
    }
    return "You are subscribed!";    
  }
}
