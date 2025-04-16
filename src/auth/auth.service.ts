import { Injectable,UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService,
        private jwtService:JwtService
    ){}
    async signIn(email:string, password:string){
        const user = await this.userService.find(email);
        if(user )
        {
            
            const isMatch = await bcrypt.compare(password,user.password)
            if(isMatch){
                const  { password,...result }= user;
                const token= await this.jwtService.signAsync(result);
                return token;
            }else
            {   
                throw new UnauthorizedException('Error de acceso');
            }
        }else{
            throw new UnauthorizedException('Error de acceso');
        }
    }
}
