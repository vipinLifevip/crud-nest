import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let UsersServices:UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [ UsersService,
        // Provide a mock implementation for UserModel if it's not needed
        {
          provide: 'UserModel',
          useValue: {
            // mock methods and properties as needed
            find: jest.fn(),
            create: jest.fn(),
            // ...
          },
        },], 
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
