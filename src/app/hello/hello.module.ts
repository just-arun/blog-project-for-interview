import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloResolver } from './hello.resolver';
import { HelloService } from './hello.service';
import { Hello, HelloSchema } from './models/hello.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Hello.name, schema: HelloSchema }
  ])],
  providers: [HelloResolver, HelloService]
})
export class HelloModule {}
