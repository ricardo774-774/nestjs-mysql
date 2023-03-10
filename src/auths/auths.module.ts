import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';

@Module({
  imports: [],
  controllers: [AuthsController],
  providers: [AuthsService]
})
export class AuthsModule {}
