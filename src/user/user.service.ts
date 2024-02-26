import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
    
      async createUser(createUserDto: CreateUserDto) {
        const user = new User();
        user.email = createUserDto.email;
        user.full_name = createUserDto.full_name;
        user.password = createUserDto.password;
        user.is_active = true;
    
        return this.userRepository.save(user);
      }
    
    private users = [];

    create(createUserDto: CreateUserDto) {
        const user = { ...createUserDto };
        this.users.push(user);
        return user;
    }

    findAll() {
        return this.users;
    }
}