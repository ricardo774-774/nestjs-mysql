import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthsModule } from './auths/auths.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { WeathersModule } from './weathers/weathers.module';
const envModule = ConfigModule.forRoot({
  isGlobal: true,
});


@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ricardo1234',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    AuthsModule,
    TasksModule,
    WeathersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
