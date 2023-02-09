import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService,
        private jwt: JwtService){}

    @Post('register')
    async register(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,

    ){
        console.log(name)
        await this.userService.create({
            name,
            email,
            password
        })

    }

    @Post('login')
    async  login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        console.log(email)
        const user = await this.userService.findOne(email);
        console.log(user)
        if(user && user.password === password){

            const payload ={email: user.email }
           return{
            token: this.jwt.sign(payload),
           } 
        }
        return null;
    }
    
    @Get('user')
    async getUser(@Req() req){
         let token = req.headers.token;
         
         try {
            const data = await this.jwt.verifyAsync(token)
            if(data){
               console.log(data['sub'])
                const user = await this.userService.findOne(data['email'])
                console.log(user)
                const {password, ...result}= user['_doc']
                return result
            }
            return null
         } catch (error) {
            return null
         }

    }
}
