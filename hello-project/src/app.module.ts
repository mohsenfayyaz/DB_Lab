import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { BookModule } from './book/book.module';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [HelloModule, BookModule, GenreModule, UserModule, BooksModule],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
