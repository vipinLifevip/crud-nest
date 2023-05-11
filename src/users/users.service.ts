import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';


@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(@InjectModel('User') public userModel: Model<User>) { }

  async create(createUserDto: User) {
    const newUser = new this.userModel({
      name: createUserDto.name,
      age: createUserDto.age
    })
    newUser.save()
    return newUser;
  }

  async findAll() {
    try {
      let users= await this.userModel.find({})
      return users;
    } catch (error) {
      this.logger.error(`Error retrieving users: ${error.message}`);
      throw error;
    }
   
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
