import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  check(email: string) {
    const user = this.usersService.users.find(user => user.email === email);
    if (!user) {
        throw new NotFoundException(`user with email: ${email}} not found`);
    }
    return user;    
  }
}
