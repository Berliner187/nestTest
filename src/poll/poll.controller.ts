import { Controller, Get, Post, Body } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class PollController {
    constructor(private readonly userService: PollService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    findAll() {
      return this.userService.findAll();
    }
}
