import { Response } from 'express';
import { UserService } from './user.service';
import { SignUpUserDto } from './dto/sigup-user.dto';
import { VerifyUserDto } from './dto/verify-otp.dto';
import { FilterUserDto } from './dto/filter-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(res: Response, signUpUserDto: SignUpUserDto): Promise<Response<any, Record<string, any>>>;
    verify(res: Response, _id: string, verifyUserDto: VerifyUserDto): Promise<Response<any, Record<string, any>>>;
    findAll(res: Response, filterUserDto: FilterUserDto): Promise<Response<any, Record<string, any>>>;
    findOne(res: Response, _id: string): Promise<Response<any, Record<string, any>>>;
}
