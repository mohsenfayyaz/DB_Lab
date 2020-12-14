import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  controllers: [TodoController],
  providers: [TodoService,
    {
        provide: APP_GUARD,
        useClass: JwtAuthGuard
    }],
})
export class TodoModule {}
