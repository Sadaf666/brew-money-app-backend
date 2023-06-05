// external libraries
import * as moment from 'moment-timezone';
import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// dto
import { SignUpUserDto } from './dto/sigup-user.dto';
import { VerifyUserDto } from './dto/verify-otp.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// schema
import { UserDocument } from './schema/user.schema';

// repository
import { UserRepository } from './repository/user.repository';

// service
import { AuthService } from '../auth/auth.service';

// helpers
import { generateOtp } from '../../shared/helpers/shared.function';

@Injectable()
export class UserService {
	constructor(
		private readonly configService: ConfigService,
		private readonly userRepo: UserRepository,
		private readonly authService: AuthService
	) {}

	async signup(
		createUserDto: CreateUserDto
	): Promise<{ token: string; users: UserDocument }> {
		const { country_code, number, device_id } = createUserDto;

		let users: UserDocument = await this.userRepo.getOne({
			'phone_number.country_code': country_code.includes('+')
				? country_code
				: `+${country_code}`,
			'phone_number.number': number,
			is_active: true
		});

		const otp: number = generateOtp(),
			expires_at: moment.Moment = moment().add(5, 'minutes');

		if (users) {
			const token: string = await this.authService.generateToken({
				_id: users._id
			});

			if (users.is_verified) {
				return { token, users };
			}

			users = await this.userRepo.update(
				{ _id: users._id },
				{
					$set: JSON.parse(
						JSON.stringify({
							'otp.value': otp,
							'otp.expires_at': expires_at
						})
					)
				}
			);

			return { token, users };
		}

		users = await this.userRepo.insertOne({
			'phone_number.country_code': country_code.includes('+')
				? country_code
				: `+${country_code}`,
			'phone_number.number': number,
			'otp.value': otp,
			'otp.expires_at': expires_at
		});

		const token: string = await this.authService.generateToken({
			_id: users._id
		});

		return { token, users };
	}

	async verify(
		_id: string,
		verifyUserDto: VerifyUserDto
	): Promise<{ users: UserDocument }> {
		const { otp } = verifyUserDto;

		let users: UserDocument = await this.userRepo.getOne({ _id });

		if (!users) {
			throw new HttpException(
				{
					success: false,
					error: `User not found for this ${_id} _id.`,
					message: 'Cannot verify otp.'
				},
				HttpStatus.BAD_REQUEST
			);
		}

		if (users.otp.value !== +otp) {
			throw new HttpException(
				{
					success: false,
					error: 'Invalid OTP.',
					message: 'Invalid OTP.'
				},
				HttpStatus.BAD_REQUEST
			);
		}

		if (moment().isAfter(users.otp.expires_at)) {
			users = await this.userRepo.update(
				{ _id },
				{ $set: JSON.parse(JSON.stringify({ 'otp.value': null })) }
			);

			throw new HttpException(
				{
					success: false,
					error: 'OTP has been expired.',
					message: 'Cannot verify otp.'
				},
				HttpStatus.BAD_REQUEST
			);
		}

		users = await this.userRepo.update(
			{ _id },
			{
				$set: JSON.parse(
					JSON.stringify({ is_verified: true, 'otp.value': null })
				)
			}
		);

		return { users };
	}

	async findAll(filterUserDto: FilterUserDto) {
		const { page, limit, sort } = filterUserDto;

		let limits: number = limit ? +limit : 20,
			pages: number = page ? +page : 1,
			skip: number = pages > 1 ? (pages - 1) * limits : 0;

		const condition: Record<string, unknown> = { is_active: true };

		const users: UserDocument[] = await this.userRepo.getAllWithPagination(
			condition,
			sort,
			skip,
			limits
		);

		const totalResults: number = await this.userRepo.count(condition);

		pages = Math.ceil(totalResults / limits);

		return { users, totalResults, pages };
	}

	async findOne(_id: string) {
		const users: UserDocument = await this.userRepo.getOne({ _id });

		return { users };
	}

	// create(createUserDto: CreateUserDto) {
	// 	return 'This action adds a new user';
	// }

	// update(id: number, updateUserDto: UpdateUserDto) {
	// 	return `This action updates a #${id} user`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} user`;
	// }
}
