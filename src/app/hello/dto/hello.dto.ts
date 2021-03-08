import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class HelloType {
    @Field(_type => ID)
    id: string;
    @Field()
    message: string;
}