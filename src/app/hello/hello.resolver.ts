import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { HelloType } from './dto/hello.dto';
import { HelloService } from './hello.service';
import { HelloInputCreate } from './inputs/hello.input';

@Resolver()
export class HelloResolver {
    constructor(
        private readonly helloService: HelloService
    ) {}

    @Query(_ => [HelloType])
    async getHello() {
        return this.helloService.getMany();
    }

    @Mutation(_ => HelloType) 
    async createHello(
        @Args('input') input: HelloInputCreate,
    ) {
        return this.helloService.create(input);
    }
}
