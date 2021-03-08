import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class HelloInputCreate {
    @Field()
    readonly message: string;
}

