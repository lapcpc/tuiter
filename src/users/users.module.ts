import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from 'src/schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  JwtModule.register({
    secret: "secreto",
  })
  ],
  providers: [UsersService],
  controllers: [UsersController],
  
})
export class UsersModule {}
