import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])]
})
export class UsersModule {}
