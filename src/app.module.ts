import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll/poll.entity';
import { PollService } from './poll/poll.service';
import { PollController } from './poll/poll.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwerty',
      database: 'local_test',
      entities: [Poll],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  providers: [PollService, AppService],
  controllers: [PollController, AppController],
})
export class AppModule {}
