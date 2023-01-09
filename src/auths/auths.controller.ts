import { 
    Body, 
    Controller, 
    HttpStatus, 
    Post, 
    Res 
} from '@nestjs/common';
import { AuthsService } from './auths.service';
import { 
    ChangePassword, 
    ConfirmUserDTO,  
    ResendTokenDTO, 
    RestorePassword, 
    SignUpDTO,
    SignInDTO
} from './dto/auths.dto';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authService: AuthsService) {}

  @Post('sign-up')
  async register(
    @Res() res,
    @Body() body: SignUpDTO,
  ): Promise<string> {
    console.log('POST /auths/sign-up/');  
    console.log('Body: ', JSON.stringify(body));  
    await this.authService.registerUser(body);
    return res.status(HttpStatus.OK).json({
      message: 'Successful registration',
    });
  }

  @Post('confirm-user')
  async confirm(
    @Res() res, 
    @Body() body: ConfirmUserDTO,
  ): Promise<ConfirmUserDTO> {
    console.log('POST /auths/confirm-user/');  
    console.log('Body: ', JSON.stringify(body));  
    const user = await this.authService.confirmUser(body);
    return res.status(HttpStatus.OK).json({
      message: 'Successful confirmation',
    });
  }

  @Post('resend-token')
  async resend(
    @Res() res, 
    @Body() body: ResendTokenDTO,
  ) {
    console.log('POST /auths/resend-token/');  
    console.log('Body: ', JSON.stringify(body));  
    await this.authService.resendToken(body);
    return res.status(HttpStatus.OK).json({
      message: 'Verification code resent by email successfully',
    });
  }

  @Post('sign-in')
  async access(
    @Res() res, 
    @Body() body: SignInDTO,
  ): Promise<string> {
    console.log('POST /auths/sign-in/');  
    console.log('Body: ', JSON.stringify(body));  
    await this.authService.accessUser(body);
    return res.status(HttpStatus.OK).json({
      message: 'Correct access',
    });
  }

  @Post('change-password')
  async change(
    @Res() res, 
    @Body() body: ChangePassword,
  ): Promise<string> {
    console.log('POST /auths/change-password/');  
    console.log('Body: ', JSON.stringify(body));  
    await this.authService.changePassword(body);
    return res.status(HttpStatus.OK).json({
      message: 'Successful password change',
    });
  }

  @Post('restore-password')
  async restore(
    @Res() res, 
    @Body() body: RestorePassword,
  ): Promise<string> {
    console.log('POST /auths/restore-password/');  
    console.log('Body: ', JSON.stringify(body));  
    await this.authService.restorePassword(body);
    return res.status(HttpStatus.OK).json({
      message: 'Verification code sent by email successfully',
    });
  }

}