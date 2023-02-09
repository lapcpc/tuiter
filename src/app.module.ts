import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://luispinot99:Hola1234@cluster0.asrtxol.mongodb.net/twitter'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'front/dist/front'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
