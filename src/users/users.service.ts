import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/cat.schema';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

    async create(createUserDto:CreateUserDto): Promise<User> {
        const createdUser = await this.userModel.create(createUserDto)
        return createdUser.save()
    }
    async findOne(email: string): Promise<User> {
        return this.userModel.findOne({ email: email }).exec();
      }
      async findId(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
      }
    
}

