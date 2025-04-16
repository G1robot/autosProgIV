import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService,
        private readonly userService:UsersService,
    ){}

    @Post('login')
    singIn(@Body() {email,password}:SignInDto ){
        return this.authService.signIn(email,password);
    }

    @Post('create')
    create(@Body() user:SignInDto ){
        return this.userService.add(user);
    }
}
