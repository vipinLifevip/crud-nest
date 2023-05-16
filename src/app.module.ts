import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),CoreModule ],
  controllers: [],
  providers: [CoreModule],
})
export class AppModule {}
