import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidationPipe } from '../validation/validation.pipe';
import { createUserSchema, updateUserSchema } from './validation.schemas';
import { User } from './Models/user.model';

@Controller('users')
export class UsersController {
  private readonly usersService: UsersService;
  constructor(usersService:UsersService) {
    this.usersService=this.usersService
  }
  

  @Post()
  @UsePipes(new ValidationPipe(createUserSchema))
  async create(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
